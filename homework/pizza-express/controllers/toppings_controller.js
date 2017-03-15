var express = require('express');
var router = express.Router();




router.get('/topping/:type', function(req, res) {
// var type = (req.query.type)
// var pizzaType = (`${req.query.type1} pizza! Good choice.`)
// var toppingType = "cheese";
res.render('toppings.hbs', {
  type: req.params.type
  });

});





module.exports = router;
