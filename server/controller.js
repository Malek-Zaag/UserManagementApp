require("./config");
const { User, Admin } = require("./model");
const jwt = require("jsonwebtoken");

module.exports.createUser = (req, res) => {
  const { username, password, firstname, lastname, email, ssn, id } = req.body;
  console.log(username, password, firstname, lastname, email, ssn, id);
  User.findOne({ email })
    .then((response) => {
      console.log(response);
      if (response == null) {
        User.create({
          username,
          password,
          firstname,
          lastname,
          email,
          ssn,
          id,
        })
          .then((response) => {
            res.send("User added successfully to database");
            res.status(200);
          })
          .catch((err) => console.log(err));
      } else {
        res.status(400);
        res.send("User found in database");
      }
    })
    .catch((err) => console.log(err));
};

module.exports.createAdmin = (req, res) => {
  const { username, password, firstname, lastname, email } = req.body;
  console.log(username, password, firstname, lastname, email);
  Admin.findOne({ email })
    .then((response) => {
      console.log(response);
      if (response == null) {
        Admin.create({
          username,
          password,
          firstname,
          lastname,
          email,
        })
          .then((response) => {
            res.send("User added successfully to database");
            res.status(200);
          })
          .catch((err) => console.log(err));
      } else {
        res.status(400);
        res.send("User found in database");
      }
    })
    .catch((err) => console.log(err));
};

const maxAge = 700 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secretkey", {
    expiresIn: maxAge,
  });
};

module.exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.login(username, password);
  if (admin) {
    const token = createToken(admin._id);
    res.cookie("jwt", token, { maxAge: maxAge * 1000 });
    console.log(JSON.stringify({ id: admin._id.valueOf() }));
    res
      .status(200)
      .send(JSON.stringify({ id: admin._id.valueOf(), name: admin.firstname }));
    console.log("admin found");
  } else {
    res.status(400);
    res.send("error happened");
  }
};

module.exports.logoutAdmin = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200);
  res.send("logout success  ");
};

module.exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

module.exports.deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.body.id);
  res.status(200);
};
