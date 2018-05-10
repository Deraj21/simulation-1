const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );

console.log(process.env.CONNECTION_STRING);
massive( process.env.CONNECTION_STRING ).then( db => {
  app.set('db', db);
  console.log('connected to database');
}).catch( err => {
  console.log('failed to connect to db:', err.message);
});


// endpoints to come...

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`) );