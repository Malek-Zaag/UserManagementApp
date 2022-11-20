const express = require("express");
const app = express();
const bp = require("body-parser");
const cors = require("cors");
require("./config");

require("dotenv").config();

//middlewares
app.use(bp.json());

const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bp.urlencoded({ extended: true }));

require("./routes")(app);

app.listen(process.env.PORT, () => {
  console.log("app listening on port", process.env.PORT);
});
