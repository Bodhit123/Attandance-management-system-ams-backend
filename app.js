const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const admin = require("./routes/admin");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/admin",admin);




module.exports = app;