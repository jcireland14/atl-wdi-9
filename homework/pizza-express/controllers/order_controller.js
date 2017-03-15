var express = require('express');
var router = express.Router();



router.get('/order/:amount/:size', function(req, res, next) {
  // var amountOrdered = 5;
  // var sizeOrdered = "large";
   //res.render("Your order for " + amountOrdered + " " +sizeOrdered + " will be ready in one minute!");
res.render('order.hbs', {
  amount: req.params.amount,
  size: req.params.size
  // amountOrdered: 5,
  // sizeOrdered: large


});

});







module.exports = router;
