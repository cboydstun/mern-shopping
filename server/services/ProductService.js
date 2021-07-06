const Product = require('../models/Product')

const getAll = async (req, res) => {
    Product.find( {}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

const search = async (req, res) => {
    Product.find(  { productName : { '$regex' : req.params.val, '$options' : 'i' } }, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

const getById = async (req, res) => {
    Product.findOne( {_id: req.params.id}, (err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
}

exports.getAll = getAll
exports.getById = getById
exports.search = search