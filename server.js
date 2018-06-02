
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;
const moment = require('moment');

const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS Header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/public'));

// Test default route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start server
app.listen(port, function() {
  console.log('Server is running on http://localhost:' + port);
});
