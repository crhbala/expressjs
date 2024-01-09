const { log } = require('console');
const express = require('express');
const app = express();

// middleware
app.use(express.json());

const HOSTNAME = '127.0.0.1';
const PORT = 3001;

//MAKE THE SERVER TO LISTEN FOR HTTP REQUESTS

app.listen(PORT, () => {
    console.log(`server running at http://${HOSTNAME}:${PORT}`);
});