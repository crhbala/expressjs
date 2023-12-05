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
    response.send('hello world');
});


const PORT = 3001;
// make the server to listen for http requests
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});