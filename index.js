const app = require('./server');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');
const mongoose = require('mongoose');


// connect to the database

info('Connecting to DB....');
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        info('Connected to mongoDB');
        //MAKE THE SERVER TO LISTEN FOR HTTP REQUESTS
// Connect to the server only after connecting the database
app.listen(config.PORT, () => {
    info(`server running at http://${config.HOSTNAME}:${config.PORT}`);
});
    })
    .catch((error) => {
        error('Error connecting to MongoDB', error);
    });



