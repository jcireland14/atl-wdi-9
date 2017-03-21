var Schema = require('../db/schema.js');
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
  index: function() {
    StudentModel.find({})
    .exec(function(err, docs) {
      if (err) { console.log(err); }

      docs.forEach(function(doc) {
        console.log(doc);
      });
    });
  },
  show: function(req) {
    StudentModel.findOne({name: req.name})
    .exec(function(err, docs) {
      if (err) {console.log(err); }
      console.log(docs);
    });
  };

  update: function(req, update) {
    StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true})
    .exec(function(err, docs) {
      if (err) { console.log(err); }

      console.log(docs);
    });
  }
};


studentsController.update({name: "becky"}, {name: "sarah"});
//studentsController.show({name: "becky"});
studentsController.index();
