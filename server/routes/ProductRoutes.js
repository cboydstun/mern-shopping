const express = require('express');
const router = express.Router();
const productService = require('../services/ProductService');

router.get('/', async (req, res) => {
  await productService.getProduct(req, res);
})

//@GET - /product/getAll - get all products - Private
router.get('/getAll', async (req, res) => { 
  await productService.getAll(req, res) 
})

//@GET - /product/:val - search for product by value - Private
router.get('/search/:val', async (req, res) => { 
  await productService.search(req, res) 
})

//GET - /product/getById/:id - get product by ID - Private
router.get('/getById/:id', async (req, res) => { 
  await productService.getById(req, res) 
})

module.exports = router;