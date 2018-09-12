const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dbURL = "mongodb://localhost/merchants";

mongoose.connect(
  dbURL,
  {
    useNewUrlParser: true
  }
);

//  MODELS
require("./models/merchant");

const app = express();

// ROUTES
const merchant = require("./routes/merchant");
const addData = require("./routes/data");
// Middlewares

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/merchant", merchant);
app.use("/addData", addData);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3002, () => console.log("Example app listening on port 3002!"));
