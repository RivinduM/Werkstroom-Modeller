const express = require('express');
const router = express.Router();
const Workflow = require('../models/workflow');
const passport = require('passport');
const jwt = require('jsonwebtoken');

/**
 * @desc save workflow
 */
router.post('/save', (req, res, next) => {
  let newWorkflow = new Workflow({
    name: req.body.name,
    user_id: req.body.user_id,
    compArray: req.body.compArray,
    connArray: req.body.connArray,
    savedDate: req.body.savedDate
  });

  Workflow.addWorkflow(newWorkflow, (err, user) => {
    if (err) {
      res.json({success: false, msg: 'Failed to save workflow'});
    }
    else {
      res.json({success: true, msg: 'Workflow saved'});
    }
  });

});


/**
 * @desc get workflows of a user
 */
router.get('/models', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  userId = req.user._id;
  Workflow.getWorkflowsByUserID(userId, (err, workflow) => {
    if (err) throw err;
    if (!workflow) {
      return res.json({
        success: false, msg: 'No saved workflows'
      });
    }
    else {
      res.json(workflow);
    }
  });

});


/**
 * @desc delete workflow
 */
router.post('/delete', (req, res, next) => {
  Workflow.deleteWorkflow(req.body.id, (err, workflow) => {
    if (err) {
      res.json({success: false, msg: 'Failed to delete workflow'});
    }
    else {
      res.json({success: true, msg: 'Workflow deleted'});
    }
  });


});


/**
 * @desc check for workflows with similar names by same user
 */
router.post('/checkWorkflow', (req, res, next) => {
  const userId = req.body.id;
  const name = req.body.name;

  Workflow.getWorkflowByName(userId, name, (err, workflow) => {
    if (err) throw err;
    if (workflow.length === 0) {
      return res.json({
        success: true, msg: 'Workflow not found'
      });
    }
    return res.json({
      success: false, msg: 'Workflow found'
    });
  });
});

/*router.post('/update', (req, res, next) => {
  Workflow.updateWorkflow(req.body.id,req.body.workflow, (err, workflow) => {
    if (err) {
      res.json({success: false, msg: 'Failed to save workflow'});
    }
    else {
      res.json({success: true, msg: 'Workflow saved'});
    }
  });


});*/
module.exports = router;
