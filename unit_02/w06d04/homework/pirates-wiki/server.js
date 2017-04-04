var express = require('express');
var app = express();
var port = 3000;////port variable
var hbs = require('hbs');////handlebars
app.set('view engine', 'hbs');////handlebars

///linking pirates_controller
var pirateController = require('./controllers/pirates_controller.js');
/////////////could also do (require(__dirname + '/controller/pirates_controller.js'))
app.use("/pirates", pirateController);

// var bodyParser = require('body-parser');
// var hbs = require('hbs');



// app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(bodyParser.json());

// app.get('/', function(req, res) {
//   res.send('this is the homepage');
// })


// Start server
app.listen(port, function() {
  console.log('Mr '+ port," up in herrrr listening and stuff");
});
