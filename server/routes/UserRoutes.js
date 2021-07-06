const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

router.post('/checkUser', async (req, res) => {
  await userService.checkUser(req, res) 
})

router.post('/checkUserName', async (req, res) => {
  await userService.checkUserName(req, res) 
})

router.get('/getAllUsers', async (req, res) => { 
  await userService.getAllUsers(req, res) 
})

router.post('/login', async (req, res) =>{
  await userService.login(req, res) 
})

router.post('/register', async (req, res) =>{
  await userService.register(req, res) 
})

module.exports = router;