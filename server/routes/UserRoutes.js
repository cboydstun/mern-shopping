const express = require('express');
const router = express.Router();

const User = require('../models/User');

//@POST - /user/checkUserName - check user name - Public
router.post('/checkUserName', async (req, res) => {
  User.findOne( {userName: req.body.userName},
     (err, result) =>{
        if(err){
            res.send(err)
        }
       res.send(result)
    }) 
})

//@GET - /user/getAllUsers - get all users - Public
router.get('/getAllUsers', async (req, res) => { 
    User.find( {}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

//@POST - /user/login - login user - Public
router.post('/login', async (req, res) =>{
    User.find( {userName: req.body.userName, password: req.body.password},
     (err, result) =>{
        if(err){
            res.send(err)
        }
       res.send(result)
    })
})

//@POST - /user/register - register new user - Public
router.post('/register', async (req, res) =>{
    const user = await new User({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        name: req.body.firstName,
    })

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
        res.json({
        message: 'Please fill out all the fields.',
    })
  }
})

module.exports = router;