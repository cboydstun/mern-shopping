const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

//@GET - /order -  get all orders - Private
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders);
  } catch (error) {
        return res.status(500).json({
            error: "Server Error"
        })
    }
})

//@POST - /order/create - create new order - Private
router.post('/create', async (req, res) => {
  const newOrder = await new Order({
    userID: req.body.userID,
    products: req.body.products,
    total: req.body.total
  })

  try {
    const savedOrder = await newOrder.save()
    res.json(savedOrder);
  } catch (error) {
        return res.status(500).json({
            error: "Server Error"
        })
    }
})

module.exports = router;