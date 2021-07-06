const Order = require('../models/Order')

const getAll = async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders);
  } catch (err) {
    res.json({ message: err })
  }
}

const createOrder = async (req, res) => {
  const newOrder = await new Order({
    userID: req.body.userID,
    products: req.body.products,
    total: req.body.total
  })

  try {
    const savedOrder = await newOrder.save()
    res.json(savedOrder);
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getAll = getAll
exports.createOrder = createOrder