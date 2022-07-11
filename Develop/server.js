const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// post routes


// get routes 

// for the /notes endpoint, return the notes html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// API route to return the db.json file
app.get("/api/notes", (req, res) => {
    res.sendFile(__dirname, "/db/db.json");
})

// for all other urls, return the index file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.listen(PORT, () => console.log("listening on port " + PORT));