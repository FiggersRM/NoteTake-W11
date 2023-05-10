const express = require('express');
const path = require('path');
const { v4: uuidv4} = require('uuid');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    console.log('Endpoint received for api/notes');
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const notes = JSON.parse(data);
            res.send(notes);
        }
    })
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () =>
  console.log(`serving all static files from public on port ${PORT}!`)
);