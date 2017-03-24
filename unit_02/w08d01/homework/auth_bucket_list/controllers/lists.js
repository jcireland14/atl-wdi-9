//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');
var mongoose = require('mongoose');
//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.send(user);
  });
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page


//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    username: req.body.username,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.send(user);
  });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
router.delete('/:id', function(req, res){
  Item.findByIdAndRemove(req.params.id)
  .exec(function(err, item) {
    if (err) console.log(err);
    console.log('Item deleted!');
    res.send("Item deleted");
  });
});

//======================
// EXPORTS
//======================
module.exports = router;
