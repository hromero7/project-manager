const db = require("../models");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    res.clearCookie("access_token");
    res.status(200).json({
      isAuthenticated: false,
      user: { username: "" },
      success: true,
    });
  },
  editProfile: async (req, res) => {
    const profileEdit = await db.User.findById({
      _id: req.params._id,
    })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(`failed to get profile data `, err));

    profileEdit.username = req.body.data.username;
    profileEdit.firstName = req.body.data.firstname;
    profileEdit.lastName = req.body.data.lastname;
    profileEdit.email = req.body.data.email;
    profileEdit.password = profileEdit.password;
    profileEdit.save(function (err) {
      if (err) {
        return res.status(500).json({
          message: { msgBody: "Error updating profile", msgError: true },
        });
      } else {
        return res.status(200).json({
          message: { msgBody: "Profile updated!", msgError: false },
        });
      }
    });
  },
  passwordChange: async (req, res) => {
    let _id = req.body._id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let newConfirm = req.body.newConfirm;

    const newPasswordChange = await db.User.findOne({ _id })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(`failed to obtain newPasswordChange findOne: `, err);
      });
    if (!newPasswordChange)
      return res
        .status(404)
        .json({ message: { msgBody: "User not Found", msgError: true } });

    if (newPasswordChange) {
      bcrypt.compare(
        oldPassword,
        newPasswordChange.password,
        (err, isMatch) => {
          if (err) {
            return err;
          } else if (!isMatch) {
            return res.status(500).json({
              message: {
                msgBody: "Incorrect original password, please try again. ",
              },
            });
          } else {
            if (newConfirm !== newPassword) {
              return res.send(500).json({
                message: {
                  msgBody:
                    "New passwords have been input incorrectly, please try again. ",
                },
              });
            } else {
              newPasswordChange.password = newPassword;
              // when password string gets saved, the userModel hashes the password.
              newPasswordChange.save((err, savedUser) => {
                if (err) {
                  return res.status(500).json({
                    message: {
                      msgBody: "Error changing password",
                      msgError: true,
                      statusNum: 500,
                    },
                  });
                } else {
                  return res.status(200).json({
                    message: {
                      msgBody: "Password successfully changed!",
                      msgError: false,
                      statusNum: 200,
                    },
                  });
                }
              });
            }
          }
        }
      );
    }
  },
};
