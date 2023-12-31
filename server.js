const express = require('express');
const app = express();

//middleware
app.use(express.json());

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

//endpoint to create a new note
app.post('/api/notes', (request, response) => {
    notes = notes.concat(request.body);
    response.status(201).json({ message: 'note created successfully' });
})

// endpoint to delete a note identified by id
app.delete('/api/notes/:id', (request, response) => {
    //get the id form the params
    const id = request.params.id;

    //find the note matching the id
    const note = notes.find(note => note.id == id);

    notes = notes.filter(note => note.id != id);

    if (note) {
        response.status(204).json(notes);
    } else {
        response.status(404).json({ message: 'id dose not exist' });
    }
});

//endpoint to replace the entire note identified by id with request data

app.put('/api/notes/:id', (request, response) => {
    //get the id form the params
    const id = request.params.id;

    const noteToReplace = request.body;

    const note = notes.find(note => note.id == id); 

    notes = notes.map(note => note.id == id ? noteToReplace : note);

    if (note) {
        response.status(200).json({ message: 'note replaced' });
    } else {
        response.status(404).json({ message: 'id dose note exists' });
    }
})

//endpoint to patch a part of note identified by id with the request data

app.patch('/api/notes/:id', (request, response) => {
    //get the id form the params
    const id = request.params.id;

    const noteToUpdate = request.body;

    const note = notes.find(note => note.id == id); 

    notes = notes.map(note => note.id == id ? {...note,...noteToUpdate} : note);

    if (note) {
        response.status(200).json({ message: 'note patched' });
    } else {
        response.status(404).json({ message: 'id dose note exist' });
    }
})

const HOSTNAME = '127.0.0.1';
const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`);
});