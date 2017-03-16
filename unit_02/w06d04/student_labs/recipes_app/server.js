var express = require('express');
var app = express();
var port = 3000;
var hbs = require('hbs');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
}));

var recipes = require('./recipes.js');



app.set("view engine", "hbs");

app.post('/recipes', function(req, res) {
 var newRecipes = {
  title: req.body.title,
  veggie: req.body.veggie,
  imageUrl: req.body.imageUrl
 };
 recipes.seededRecipes.push(newRecipes);
  res.redirect('/recipes/');
});


app.get('/recipes', function(req, res) {
  res.render('recipes/index.hbs', {
    recipes: recipes.seededRecipes
  });
});
app.get('/recipes/new', function(req, res) {
  res.render('recipes/new.hbs')
});

/////show
// app.get('/recipes/:id', function(req, res) {

// });
app.get('/recipes/:id', function(req, res) {
  var recipe= recipes.seededRecipes[req.params.id];

  res.render('recipes/show.hbs', {
    recipe: recipe
  });
});

app.listen(port, function() {
  console.log("=^=^=^=^=^=^=^=^")
  console.log('Mr ' + port + ' in this bitch');
  console.log("=^=^=^=^=^=^=^=^")
});
