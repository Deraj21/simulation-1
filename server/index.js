const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
app.use(bodyParser.json);

// endpoints to come...

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`) );