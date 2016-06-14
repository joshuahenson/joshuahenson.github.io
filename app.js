'use strict';
const express = require('express');
const app = express();
const routes = require('./routes/index.js');

const port = process.env.NODE_PORT || 5000;
const ipaddress = process.env.NODE_IP || 'localhost';

app.use(express.static('public'));

// routes(app);
app.use('/', routes);

app.listen(port, ipaddress, function() {
  console.log('Node app is running on port', port);
});
