const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

//@POST - /user/checkUser - check user status - Public
router.post('/checkUser', async (req, res) => {
  await userService.checkUser(req, res) 
})

//@POST - /user/checkUserName - check user name - Public
router.post('/checkUserName', async (req, res) => {
  await userService.checkUserName(req, res) 
})

//@GET - /user/getAllUsers - get all users - Public
router.get('/getAllUsers', async (req, res) => { 
  await userService.getAllUsers(req, res) 
})

//@POST - /user/login - login user - Public
router.post('/login', async (req, res) =>{
  await userService.login(req, res) 
})

//@POST - /user/register - register new user - Public
router.post('/register', async (req, res) =>{
  await userService.register(req, res) 
})

module.exports = router;