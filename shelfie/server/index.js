const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );

massive( process.env.CONNECTION_STRING ).then( db => {
  app.set('db', db);
  console.log('connected to database');
}).catch( err => {
  console.log('failed to connect to db:', err.message);
});

app.get('/api/products', controller.getProducts);
app.post('/api/products', controller.addProduct);
app.delete('/api/products/:id', controller.deleteProduct);
app.put('/api/products/:id', controller.editProduct);

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`) );
