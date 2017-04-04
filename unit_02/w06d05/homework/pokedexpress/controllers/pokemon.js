//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require("express");
// Set express Router to a variable called router:
var router = express.Router();
// Require the poke_array.js file here from models.
// Save it to a variable called data:
var pokemonData = require('../models/poke_array.js');

//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res) {
  res.render('pokemon/index.hbs', {
      pokemon: pokemonData
  });
});



// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/', function(req, res) {
  res.render('pokemon/index', {
    pokemon: data.poke_array
  });
});



// Make a GET route '/new' that will simply render a form to create a new Pokemon




//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
router.post('/', function(req, res) {
 var newPokemon = {
  name: req.body.name,
  img: req.body.img,
  type: req.body.type,
  stats: {
    attack: req.body.attack,
    defense: req.body.defense,
    spattack: req.body.spattack,
    spdefense: req.body.spdefense,
    speed: req.body.speed
 }
};
 pokemonData.push(newPokemon);
 res.redirect('/pokemon');
});

//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.
router.delete('/:index', function(req, res) {
  pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});
router.get('/:index', function(req, res) {
  res.render('pokemon/show.hbs', {
    data: poke_array[req.params.id]
  });
});


//***************************
// EXPORTS
//***************************
// use module.exports to export router:
module.exports = router;
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
