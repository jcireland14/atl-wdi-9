//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var hbs = require('hbs');
var methodOverride = require('method-override');

//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
///////BODYPARSER
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.set("view engine", "hbs");
app.set('views', './views');
app.use(methodOverride('_method'));
//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require('./controllers/pokemon.js');
app.use("/pokemon", pokemonController);



//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(3000, function(req, res){
  console.log("listening");
});
