const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const item = require('./routes/api/Items');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

// Connect to MongoDB using mongoose
mongoose
  .connect('mongodb://localhost:27017/sample_mern')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// use routes
app.use(bodyParser.json());

// Variable repository
const port = 3000 || 27017;

app.listen(port, () => console.log('Started on port '+ port));
