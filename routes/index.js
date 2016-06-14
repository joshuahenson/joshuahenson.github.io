'use strict';
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var contact = require('../controllers/contact.js');

router.post('/contact', urlEncodedParser, contact);

router.use(function(req, res) {
  res.redirect('/');
});

module.exports = router;
