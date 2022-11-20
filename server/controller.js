require("./config");
const { User, Admin } = require("./model");

module.exports.createUser = (req, res) => {
  const { username, firstname, lastname, email, ssn } = req.body;
  console.log(username, firstname, lastname, email, ssn);
  User.findOne({ email })
    .then((response) => {
      console.log(response);
      if (response == null) {
        User.create({
          username,
          firstname,
          lastname,
          email,
          ssn,
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
