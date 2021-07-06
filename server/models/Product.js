const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    typeOfProduct: {
        type: Number,
        required: false,
    },
})
const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;