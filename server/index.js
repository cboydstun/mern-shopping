//import dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config();

//initalize express
const app = express()

//initalize port
const PORT = process.env.SERVER_PORT || 5002;

//initalize middleware
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :response-time'))

//MonogoDB connect
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("Connected to MongoDB")).catch((err)=>{console.log(err)})

//import routes
const userRoute = require('./routes/UserRoutes')
const productRoute = require('./routes/productRoutes')
const orderRoute = require('./routes/OrderRoutes')

//initalize routes
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/order', orderRoute)

//app listening
app.listen(PORT, ()=>{console.log(`Server running at ${PORT}`)})