const express = require('express');
const app = express();

let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    }, 
    {
        id: 2,
        content: 'node.js is a open source',
        important: false
    },
    {
        id: 3,
        content: 'simple web server using Node.js',
        important: true
    }
];
//define the endpoint
app.get('/', (request, response) => {
    response.send('<h1>Note App</h1>');
});

//endpoint to get all the notes
app.get('/api/notes', (request, response) => {
    response.json(notes);
});

//endpoint to fetch a single note
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;

    //find the notes with the id
    const note = notes.find(note => note.id == id);

    if (note) {
        response.status(200).json(note);
    } else {
        response.status(404).json({ message: 'id dose not exist' });
    }
    
});

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});