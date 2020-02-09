// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
let data = JSON.parse(fs.readFileSync("./json/db.json", "utf8"));

app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });