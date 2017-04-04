//requirements
var express = require("express");
var router = express.Router();
var piratesArray = require('../models/pirates.js');


/////route getting name from pirates
router.get('/', function(req, res) {
  res.render('index', {
    pirate: piratesArray
});
});


//exports
module.exports = router;//your code below
