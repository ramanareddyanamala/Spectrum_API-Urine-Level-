var express = require('express');

var home = express.Router();

/* GET home page. */
home.get('/', function(req, res, next) {
  res.setHeader('./home' );
});

module.exports = home;