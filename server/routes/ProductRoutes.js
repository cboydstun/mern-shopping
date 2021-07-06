const express = require('express');
const router = express.Router();

const Product = require('../models/Product')

//@GET - /product/getAll - get all products - Private
router.get('/getAll', async (req, res) => { 
    Product.find( {}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

//@GET - /product/:val - search for product by value - Private
router.get('/search/:val', async (req, res) => { 
    Product.find(  { productName : { '$regex' : req.params.val, '$options' : 'i' } }, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

//GET - /product/getById/:id - get product by ID - Private
router.get('/getById/:id', async (req, res) => { 
    Product.findOne( {_id: req.params.id}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
})

module.exports = router;