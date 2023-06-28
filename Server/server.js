const { mongoose }= require('./mongoose/db');
const express = require('express');

const app = express();

app.get('/api/home', function(req, res) {
    res.send('Welcome!');
  });
app.get('/api/secret', function(req, res) {
    res.send('The password is potato');
  });

app.listen(5000, function() {
    console.log('Server is running on http://localhost:5000');
  });
  

