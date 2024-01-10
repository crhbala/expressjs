
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

// middleware
app.use(cors());
app.use(express.json());

//endpoint to view all notes
app.get('/api/notes', (request, response) => {
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
        })
});


module.exports = app;