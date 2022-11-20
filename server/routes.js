const { application } = require("express");
const myController = require("./controller");

module.exports = function (app) {
  app.get("/api/", (req, res) => {
    res.send("hello from my backend");
  });
  app.post("/api/create-user", myController.createUser);
  app.post("/api/create-admin", myController.createAdmin);
  app.post("/api/login-admin", myController.loginAdmin);
  app.post("/api/logout-admin", myController.logoutAdmin);
  app.get("/api/list-users", myController.getUsers);
  app.delete("/api/delete-user", myController.deleteUser);
};
