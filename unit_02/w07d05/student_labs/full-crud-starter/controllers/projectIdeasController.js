
var express = require('express');
var router = express.Router({mergeParams:true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea= require('../models/projectIdea');

// USERS INDEX ROUTE
router.get('/', function indexProjectIdea(req, res){
  User.findById({req.params.usedId})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('projectIdeas/index.hbs', {
        user: user
      });
    });
});

// USER SHOW ROUTE
router.get('/:id', function showProjectIdea(req, res){
  User.findById(req.params.userid)
  .exec(function(err, user) {
    if (err) console.log(err);
    cosnt projectIdea = user.project_ideas.id(req.params.id);
    res.render('projectIdeas/show', {
      projectIdea: projectIdea,
      user: user
    });
  });
});

// USER EDIT ROUTE
router.get('/:id/edit', function editProjectIdea(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    const projectIdea = user.project_ideas.id(req.params.id);
    res.render('projectIdeas/edit', {
      projectIdea: projectIdea,
      user: user
    });
  });
});

// USER CREATE ROUTE
router.post('/', function createProjectIdea(req, res){
  User.findById(req.params..userId);
  .exec(function (err, user) {
    if (err) {console.log(err);}
    const newProjectIdea = {
      description: req.body.description,
      in_progress: req.body.in_progress
    }
    user.project_ideas.push(newProjectIdea)
    user.save(function (err) {
      if (err) console.log(err);
      console.log('Project Idea created')
    });
    res.redirect('/users')
  });
  });

// USER UPDATE ROUTE
router.put('/:id', function updateProjectIdea(req, res){
  User.findByIdAndUpdate(req.params.id, {
  .exec(function(err, user){
    if (err) { console.log(err); }
    const projectIdea = user.project_ideas.id(req.params.id);
    projectIdea.description = req.body.description
    projectIdea.in_progress = req.body.in_progress
    user.save();
    res.render('projectIdeas/show', {
      projectIdea: projectIdea,
      user: user
    });
  });
});

// USER DESTROY
router.delete('/:id', function deleteProjectIdea(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) {console.log(err);}
    console.log('Project Idea was removed')
  });
    res.render('projectIdeas/index', {
      user: user
    });
  });
});

// ITEM INDEX ROUTE
router.get('/:id/items', function(req, res){
  User.findById(req.params.id)
    .exec(function(err, user){
      if (err) { console.log(err); }
      console.log(user.id)
      console.log(user.items)
      res.render('items/index.hbs', {
        items: user.items,
        user: user
      });
    });
});

// ADD A NEW ITEM
router.get('/new', function newPrjectIdea(req, res){
  User.findById(req.params.id)
  .exec(function(err, user){
      if (err) {console.log(err);}
      res.render('projectIdeas/new', {
        user:user
    });
  });
});



module.exports = router;
