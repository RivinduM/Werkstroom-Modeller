const mongoose = require('mongoose');

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
    type: Date
  },
  deleted: {
    type: Boolean,
    default: false
  }
});


const Workflow = module.exports = mongoose.model('Workflow', WorkflowSchema);

/**
 * @desc get workflow by id
 * @param id
 * @param callback
 */
module.exports.getWorkflowById = function (id, callback) {
  Workflow.findById(id, callback);
};

/**
 * @desc get workflows by user
 * @param user_id
 * @param callback
 */
module.exports.getWorkflowsByUserID = function (user_id, callback) {
  Workflow.find({user_id: user_id, deleted: false}, callback);
};

/**
 * @desc get workflow by name
 * @param id
 * @param name
 * @param callback
 */
module.exports.getWorkflowByName = function (id, name, callback) {
  Workflow.find({user_id: id, name: name, deleted: false}, callback);
};

/**
 * @desc save workflow
 * @param newWorkflow
 * @param callback
 */
module.exports.addWorkflow = function (newWorkflow, callback) {
  newWorkflow.save(newWorkflow);
};

/**
 * @desc delete workflow
 * @param workflow_id
 */
module.exports.deleteWorkflow = function (workflow_id) {
  Workflow.findById(workflow_id, function (err, workflow) {
    workflow.set({deleted: true});
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


