const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/notes", (req, res) => {
  console.log("Endpoint received for api/notes");
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const notes = JSON.parse(data);
      res.send(notes);
    }
  });
});

app.post("/api/notes", (req, res) => {
  console.log(`${req.method} request received to add a note`);
  console.log(req.body);
  const { title, text } = req.body;
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(newNote);
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated Notes!")
        );
      }
    });
    const response = {
      status: "success",
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
  }
});

app.delete("/api/notes/:id", (req, res) => {
  console.log(`${req.method} request received to delete a note`);
  const noteId = req.params.id;
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const parsedNotes = JSON.parse(data);
      for (let i = 0; i < parsedNotes.length; i++) {
        if (noteId === parsedNotes[i].id) {
            parsedNotes.splice(i, 1);
        }
      }
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(parsedNotes, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info("Successfully updated Notes!")
      );
    };
  });
  res.send('Note successfully deleted');
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`serving all static files from public on port ${PORT}!`)
);
