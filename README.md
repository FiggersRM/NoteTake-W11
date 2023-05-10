# Notetaker

## Description

In this week, we were tasked with creating an application that uses different api routes in order to allow users to add notes to a website that will save those notes. Instead of using local storage to save notes, we were asked to put those notes in a "database", which is a json file in this case, and to use express to navigate the server. We were given starter code that completed all of the front-end coding for us, so we had to create the server files for the application. We were specifically tasked for doing the static routes, a get route to retrieve the notes that are already in the db, a post route to add notes to the db, and a delete route (optional) to delete a note, all using express. After all of that was completed, we deployed the site to a Heroku server.

The application itself is very easy to use, and successfully reads current notes, adds notes when the save button is clicked, and deletes a note when the delete button is clicked on that notes' listing.

## Installation

Uses the inquirer, express, fs, path, and uuid npm packages. To install, run an npm install in the terminal of the repository.

## Usage

This application can be used to create and delete notes for any use. Whether it be a professional, personal, or business usage, it can do it. Each note needs a title and header typed in, and to save that note click the save button in the top right corner of the page. 

## License

N/A

## Credits

npm Modules used: 

* Inquirer: https://www.npmjs.com/package/inquirer
* Express: https://www.npmjs.com/package/express
* fs: https://www.npmjs.com/package/fs
* path: https://www.npmjs.com/package/path
* uuid: https://www.npmjs.com/package/uuid