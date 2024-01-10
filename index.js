const app = require('./server');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');

//MAKE THE SERVER TO LISTEN FOR HTTP REQUESTS

app.listen(config.PORT, () => {
    info(`server running at http://${config.HOSTNAME}:${config.PORT}`);
});