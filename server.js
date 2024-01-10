
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

// middleware
app.use(cors());
app.use(express.json());

// connect to the database




//define a schema
const noteSchema = new mongoose.Schema({
    id: Number,
    content: String,
    important: Boolean
});


//create a model
const Note = mongoose.model('Note', noteSchema, 'notes');

//endpoint to view all notes
app.get('/api/notes', (request, response) => {
    Note.find({}, {})
        .then(notes => {
            response.status(200).json(notes);
        })
});


module.exports = app;