const User = require('../models/User');

const getAllUsers = async (req, res) => {
    User.find( {}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

const login = async (req, res) => {
    User.find( {userName: req.body.userName, password: req.body.password},
     (err, result) =>{
        if(err){
            res.send(err)
        }
       res.send(result)
    })
}

const register = async (req, res) => {
    const user = await new User({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        name: req.body.firstName,
        sureName: req.body.sureName
    })

 try {
    const savedUser = await user.save();
    res.json(savedUser);
     } catch (err) {
        res.json({
        message: 'Please fill out all the fields.',
        })
  }
}

const checkUserName = async (req, res) => {
    User.findOne( {userName: req.body.userName},
     (err, result) =>{
        if(err){
            res.send(err)
        }
       res.send(result)
    })
}

exports.getAllUsers = getAllUsers
exports.login = login
exports.checkUserName = checkUserName
exports.register = register