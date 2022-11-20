const mongoose = require("mongoose");
const md5 = require("md5");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  },
  firstname: {
    type: String,
    required: [true, "please enter a firstname"],
  },
  lastname: {
    type: String,
    required: [true, "please enter a lastname"],
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    lowercase: true,
    unique: [true, "please enter another email"],
  },
  ssn: {
    type: Number,
    required: [true, "please enter a ssn"],
  },
  id: {
    type: String,
  },
});
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  },
  firstname: {
    type: String,
    required: [true, "please enter a firstname"],
  },
  lastname: {
    type: String,
    required: [true, "please enter a lastname"],
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    lowercase: true,
    unique: [true, "please enter another email"],
  },
});

userSchema.pre("save", async function (next) {
  this.password = md5(this.password);
  next();
});

adminSchema.pre("save", async function (next) {
  this.password = md5(this.password);
  next();
});

adminSchema.statics.login = async function (username, password) {
  const admin = await this.findOne({ username });
  if (admin) {
    var auth;
    if (md5(password) === admin.password) auth = true;
    else {
      console.log("wrong password");
      auth = false;
    }

    if (auth) {
      return admin;
    }
  }
};

module.exports.User = mongoose.model("User", userSchema);
module.exports.Admin = mongoose.model("Admin", adminSchema);
