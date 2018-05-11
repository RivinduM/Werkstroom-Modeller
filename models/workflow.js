const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const WorkflowSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  compArray: {
    type: Array
  },
  connArray: {
    type: Array
  },
  savedDate: {
    type:Date
  }
});


const Workflow = module.exports = mongoose.model('Workflow', WorkflowSchema);

module.exports.getWorkflowById = function (id, callback) {
  Workflow.findById(id, callback);
};

module.exports.getWorkflowsByUserID = function (user_id, callback) {
  const query = {user_id: user_id};
  Workflow.find(query, callback);
};


module.exports.addWorkflow = function (newWorkflow, callback) {
  newWorkflow.save(newWorkflow);
  /*if(this.authService.loggedIn()){
    /!*this.authService.getProfile().subscribe(profile => {
        const uid = profile.user._id;
      },
      err => {
        throw err;
      });*!/
   /!* newWorkflow.user_id = uid;*!/

    newWorkflow.save(callback);
  }
  else {
    this.router.navigate(['/login']);
    return false;
  }*/

  /*newWorkflow.save(callback);*/
};
/*
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};
*/
