const db = require("../models");
const JWT = require("jsonwebtoken");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "projectm",
      sub: userID,
    },
    "projectm",
    { expiresIn: "2h" }
  );
};

module.exports = {
  findAll: (req, res) => {
    db.User.find({}, (err, users) => {
      if (err)
        return res
          .status(500)
          .json({
            message: { msgBody: "Error has occured", msgError: true },
          })
          .sendStatus(500);
      else return res.status(200).json(users);
    });
  },
  findbyid: (req, res) => {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findbyusername: (req, res) => {
    db.User.find({
      username: { $regex: `.*${req.params.username}*`, $options: "i" },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  createUser: (req, res) => {
    let username = req.body.username;
    db.User.findOne({ username }, (err, user) => {
      if (err)
        res.sendStatus(500).json({
          message: {
            msgBody: "Error has occured!",
            msgError: true,
            statusNum: 500,
          },
        });
      if (user)
        res.status(400).json({
          message: {
            msgBody: "Username is already taken",
            msgError: true,
            statusNum: 400,
          },
        });
      else {
        let newUser = new db.User();
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.email = req.body.email;
        newUser.username = req.body.username;
        newUser.password = req.body.password;

        newUser.save((err, savedUser) => {
          if (err)
            return res.status(500).json({
              message: {
                msgBody: "Existing account!",
                msgError: true,
                statusNum: 500,
              },
            });
          else
            return res.status(200).json({
              message: {
                msgBody: "Account successfully created",
                msgError: false,
                statusNum: 200,
              },
            });
        });
      }
    });
  },
  authenticateUser: (req, res) => {
    //confirms user is authenticated and sends user info to front end
    let { username, email, _id, firstName, lastName } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: { username, email, _id, firstName, lastName },
    });
  },
  login: (req, res) => {
    //login user route, assigns jwt token to user
    if (req.isAuthenticated()) {
      const { _id, username, email, firstName, lastName } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({
        isAuthenticated: true,
        user: {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          _id: _id,
        },
      });
    }
  },
  logout: (req, res) => {
    //logout user route, removes jwt token from user
    res.clearCookie("access_token");
    res.status(200).json({
      isAuthenticated: false,
      user: { username: "" },
      success: true,
    });
  },
};
