// Standard stuff
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var hbs = require('hbs')
var methodOverride = require('method-override')
var morgan = require('morgan')

app.use(express.static(__dirname + '/public/css'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'))


var usersController = require("./controllers/usersController.js");
app.use('/users', usersController);

var productIdeasController = require ('./controllers/productIdeasController.js');
app.use('/users/:userId/project-ideas', projectIdeasController);

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
