var express = require('express');
var  router = express.Router();
var data = require('../data.js');

//////index//|?|?|?|?|?|?|?|?|?
router.get('/', function(req, res) {
  res.render('toDonts/views/index', {
    todonts: data.seededToDonts
});
});
////////////////
/////////NEW TODONT


/////////////////
///////SHOW TODONT


///////////////////
////////CREATE/POST TODONT

//////////
module.exports = router;
