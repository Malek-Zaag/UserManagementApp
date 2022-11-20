const myController = require("./controller");

module.exports = function (app) {
  app.get("/api/", (req, res) => {
    res.send("hello from my backend");
  });
  app.post("/api/create-user", myController.createUser);
  app.post("/api/create-admin", myController.createAdmin);
};
