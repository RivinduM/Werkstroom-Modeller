const express = require('express');
const router = express.Router();
const Workflow = require('../models/workflow');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

/*router.post('/save', (req, res, next) => {
  let newWorkflow = new Workflow({
    name: req.body.name,/!*
    user_id: req.body.user_id,*!/
    compArray: req.body.compArray
  });

  Workflow.addWorkflow(newWorkflow, (err, user) =>{
    if(err){
      res.json({success: false, msg: 'Failed to save workflow'});
    }
    else{
      res.json({success: true, msg: 'Workflow saved'});
    }
  });
});*/

/*router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if (!user){
      return res.json({
        success: false, msg: 'User not found'
      });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else{
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});*/

/*router.post('/save', passport.authenticate('jwt', {session: false}), (req, res, next) => {*/

/*//Save
router.post('/save', (req, res, next) => {
    /!*res.json({user: req.user});*!/
    /!* user= req.user;
     res.json(user);*!/

    let newWorkflow = new Workflow({
      name: req.body.name,
      user_id: user._id,
      compArray: req.body.compArray,
      connArray: req.body.connArray,
      savedDate: req.body.savedDate
    });

    Workflow.addWorkflow(newWorkflow, (err, user) =>{
      if(err){
        res.json({success: false, msg: 'Failed to save workflow'});
      }
      else{
        res.json({success: true, msg: 'Workflow saved'});
      }
    });

  });*/

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

module.exports = router;
