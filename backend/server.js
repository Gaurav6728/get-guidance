const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { dirname } = require("path");
const PORT = 5000;
const db = require("./db.js");
const router = require("./routes");

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);
const dotenv = require("dotenv").config();
db.connect();

app.use(cors);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
