const express = require('express');
const router = express.Router();
const Workflow = require('../models/workflow');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Save
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

router.get('/models',passport.authenticate('jwt', {session: false}), (req, res, next) => {
  userId = req.user._id;
  Workflow.getWorkflowsByUserID(userId,(err, workflow) => {
    if(err) throw err;
    if (!workflow){
      return res.json({
        success: false, msg: 'No saved workflows'
      });
    }
    else{
      res.json(workflow);
    }
  });

});


//Delete
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
module.exports = router;
