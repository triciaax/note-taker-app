const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// post routes

// to create a new note, post to /api/notes
app.post('/api/notes', (req, res) => {
    let note = req.body;
    let noteList = JSON.parse(fs.readFileSync("./db/db.json"));
    let length = noteList.length;

    // assign the note an ID equal to the length of the list
    note.id = length;
    noteList.push(note);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
    res.json(noteList);
})

// get routes 

// for the /notes endpoint, return the notes html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// API route to return the db.json file
app.get("/api/notes", (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db/db.json', "utf-8"));
    res.json(db);
})

// for all other urls, return the index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen(PORT, () => console.log("listening on port " + PORT));