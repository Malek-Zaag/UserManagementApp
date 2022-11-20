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
    type: Number,
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
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    var auth;
    if (md5(password) === user.password) auth = true;
    else auth = false;
    if (auth) {
      return user;
    }
  }
};

module.exports.User = mongoose.model("User", userSchema);
module.exports.Admin = mongoose.model("Admin", adminSchema);
