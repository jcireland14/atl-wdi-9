var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var ItemSchema = new Schema({
  name: String
});

var ProjectIdeaSchema = new Schema({
  desciption: String,
  in_progress: Boolean,
  created_at: Date,
  updated_at: Date
});

ProjectIdeaSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


var UserModel = mongoose.model("User", UserSchema);
var ProjectIdeaModel = mongoose.model("project_idea", ProjectIdeaSchema);

module.exports = {
  User: UserModel,
  projectIdea: ProjectIdeaModel
};
