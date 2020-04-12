// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// return index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// return notes.html
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// read db.json file and return all saved notes as JSON
app.get("/api/notes", function (req,res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        console.log(data);
        if (err) throw err;
        const note = JSON.parse(data);
        return res.json(note);
    });
});

// receive new note to save on the request body, add it to the `db.json` file, 
// and then return the new note to the client.
app.post("/api/notes", function (req,res) {
    const note = req.body;
    data.push(note);
    fs.writeFile("./db/db.json", JSON.stringify(data), function(err) {
        if(err) throw err;
        console.log("New post successful!");
    });
    return res.json(data);
});

// remove note with given id
app.delete("/api/notes/:id", function (req,res) {
    data = data.filter(function (data) {
        if (req.params.id === data.id) {
            return false;
        }
        return true;
    });

    fs.writeFile("./db/db.json", JSON.stringify(data), function(err){
        if(err) throw err;
        console.log("Note Successfully Deleted");
    });
    return res.json(data);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });