const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    maxLength: 30,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    maxLength: 30,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    required: true,
  },
  username: {
    type: String,
    maxLength: 30,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

//hash password before user is saved into database
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 10, (err, hashPassword) => {
    if (err) return next(err);
    else this.password = hashPassword;
    next();
  });
});

//compare hashed password to user inputted password
UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch, res) => {
    console.log("passwordCompare:", {
      password: password,
      "this.password": this.password,
      err: err,
      isMatch: isMatch,
    });

    if (err) {
      return cb(err);
    } else if (!isMatch) {
      return cb(null, isMatch);
    } else {
      return cb(null, this);
    }
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
