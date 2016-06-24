const express = require('express');
const router = express.Router(); // eslint-disable-line
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonEncodedParser = bodyParser.json();
const contact = require('../controllers/contact.js');
const jsContact = require('../controllers/jsContact.js');

router.post('/contact', urlEncodedParser, contact);

router.post('/jsContact', jsonEncodedParser, jsContact);

router.use((req, res) => {
  res.redirect('/');
});

module.exports = router;
