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
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

// API route to return the db.json file
app.get("/api/notes", (req, res) => {
    res.sendFile(__dirname, "/Develop/db/db.json");
})



app.listen(PORT, () => console.log("listening on port " + PORT));