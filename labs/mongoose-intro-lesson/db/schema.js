var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

// Use ES6 native promises. We are specifying a Promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

// Disconnect from database
db.close();

// db.schema.js
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
  title: String,
  unit: String
});
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var StudentSchema = new Schema({
  name:String,
  age: Number,
  projects: [ProjectSchema]
});
/////model method makes copy of the schema
var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model('Students', StudentSchema);

// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var project1 = new ProjectModel({title: "connect four", unit:"js"})

// frankie.projects.push(project1);

// frankie.save(function(err, student){
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student);
//   }
// });

// By adding `module.exports`, we can reference these models in other files by requiring `schema.js`.
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};


