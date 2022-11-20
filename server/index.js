const express = require("express");
const app = express();
const bp = require("body-parser");

require("./config");

require("dotenv").config();

//middlewares
app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

require("./routes")(app);

app.listen(process.env.PORT, () => {
  console.log("app listening on port", process.env.PORT);
});
