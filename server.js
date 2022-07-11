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

app.get("/notes", (req, res) => {
    res.sendFile("./public/notes.html")
});

app.listen(PORT, () => console.log("listening on port " + PORT));