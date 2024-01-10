const { log } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./utils/config')

// middleware
app.use(express.json());

// connect to the database


console.log('Connecting to DB....');
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to mongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });

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


//MAKE THE SERVER TO LISTEN FOR HTTP REQUESTS

app.listen(config.PORT, () => {
    console.log(`server running at http://${config.HOSTNAME}:${config.PORT}`);
});