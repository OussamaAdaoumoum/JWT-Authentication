const { mongoose } = require('./mongoose/db');
const express = require('express');

// Import our User schema
const User = require('./model/user.js');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const withAuth = require('./middleware');


const app = express();

app.use(express.json()); // Add this line to parse JSON request bodies
app.use(cookieParser());

app.get('/api/home', function(req, res) {
    res.send('Welcome!');
  });

  //we can use this middleware whenever we want to have a protected route by simply editing its route configuration to use the new middleware we just wrote
  app.get('/api/secret', withAuth, function(req, res) {
    res.send('The password is potato');
  });


  // a way to simply ask our server if we have a valid token saved to our browser cookies.
  app.get('/checkToken', withAuth, function(req, res) {
    res.sendStatus(200);
  });


  // POST route to register a user
  app.post('/api/register', function(req, res) {
    console.log('this is the request body', req.body);
    const { email, password } = req.body;
    const user = new User({ email, password });
    user.save();
  });

  app.post('/api/authenticate', function(req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
            // you have to validate the password also 

            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.cookie('token', token, { httpOnly: true })
              .sendStatus(200);
          }
        
      }
    )
  });




app.listen(5000, function() {
    console.log('Server is running on http://localhost:5000');
  });
  




