const express = require('express')
const router = express.Router()
const orderService = require('../services/OrderService')

//@GET - /order -  get all orders - Private
router.get('/', async (req, res) => {
  await orderService.getAllOrders(req, res)
})

//@POST - /order/create - create new order - Private
router.post('/create', async (req, res) => {
  await orderService.createOrder(req, res)
})

module.exports = router;