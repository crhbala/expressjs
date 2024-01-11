const notesRouter = require('express').Router();
const Note = require('../note');


//endpoint to view all notes
notesRouter.get('/api/notes', (request, response) => {
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
        })
});

module.exports = notesRouter;