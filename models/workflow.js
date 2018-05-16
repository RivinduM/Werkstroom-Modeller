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
  },
  deleted:{
    type:Boolean,
    default:false
  }
});


const Workflow = module.exports = mongoose.model('Workflow', WorkflowSchema);

module.exports.getWorkflowById = function (id, callback) {
  Workflow.findById(id, callback);
};

module.exports.getWorkflowsByUserID = function (user_id, callback) {
  // const query = {user_id: user_id}, {deleted: false} ;
  Workflow.find({user_id: user_id, deleted: false},  callback);
};

module.exports.getWorkflowByName = function (id, name, callback) {
  Workflow.find({user_id: id, name: name, deleted: false},  callback);
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

module.exports.deleteWorkflow = function(workflow_id){
  Workflow.findById(workflow_id, function (err, workflow) {
   // if (err) throw err;
    workflow.set({ deleted: true });
    Workflow.addWorkflow(workflow);
  });

};

/*module.exports.updateWorkflow = function(workflow_id, workflow){
  Workflow.findById(workflow_id, function (err, old) {
   // if (err) throw err;
    // console.log(old)
    /!*old.compArray = workflow.compArray;
    old.connArray = workflow.connArray;
    old.savedDate = workflow.savedDate;*!/
    old.set({ compArray: workflow.compArray });
    /!*console.log(old);*!/
    Workflow.addWorkflow(old);
  });

};*/


/*
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};
*/
