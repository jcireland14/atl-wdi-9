//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;


/////////
app.get('/', function(req, res) {

    res.send("Welcome to Pizza Express!");
  });
// ////////topping route
app.get('/topping/:cheese', function(req, res) {
// var type = (req.query.type1)
// var pizzaType = (`${req.query.type1} pizza! Good choice.`)

var toppingType = "cheese";
res.send(toppingType + " pizza! Good choice.");
});

// ////////order route

app.get('/order/:5/:large', function(req, res, next) {
  var amountOrdered = 5;
  var sizeOrdered = "large";
   res.send("Your order for " + amountOrdered + " " +sizeOrdered + " will be ready in one minute!");

});


// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
