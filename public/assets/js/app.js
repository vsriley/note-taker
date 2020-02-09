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

// return index.html
app.get("/", function (req, res) {

});

// return notes.html
app.get("/notes", function (req, res) {

});

// read db.json file and return all saved notes as JSOn
app.get("/api/notes", function (req,res) {

});

// receive new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function (req,res) {

});

// remove note with given id
app.delete("/api/notes/:id", function (req,res) {

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });