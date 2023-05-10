const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('api/notes', (req, res) => res.json(notes));

app.listen(PORT, () =>
  console.log(`serving all static files from public on port ${PORT}!`)
);