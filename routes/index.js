const express = require('express');
const router = express.Router(); // eslint-disable-line
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const contact = require('../controllers/contact.js');

router.post('/contact', urlEncodedParser, contact);

router.use((req, res) => {
  res.redirect('/');
});

module.exports = router;
