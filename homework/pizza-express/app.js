//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');


// ////////topping route
var toppingsController = require(__dirname + '/controllers/toppings_controller.js');
  app.use("/topping", toppingsController);
// ////////order route
var orderController = require(__dirname + '/controllers/order_controller.js');
  app.use("/order", orderController);
/////////index
var indexController = require(__dirname + '/controllers/index_controller.js');
  app.use("/", indexController);













// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("=^=^=^=^=^=^=^=^=^=^=^=^=^")
  console.log('LISTENING ON PORT ' + port);
  console.log("=^=^=^=^=^=^=^=^=^=^=^=^=^")
});
