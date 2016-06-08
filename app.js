var express = require('express');
var app = express();

const port = process.env.NODE_PORT || 5000;
const ipaddress = process.env.NODE_IP || 'localhost';

app.use(express.static('public'));

app.listen(port, ipaddress, function() {
  console.log('Node app is running on port', port);
});
