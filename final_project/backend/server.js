require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const pets = require("./routes/pets");
const cart = require("./routes/cart");
const orders = require("./routes/orders");
const passwordReset = require("./routes/forgot-password");
const userAuthentication = require("./routes/userAuthentication");
const Contact = require("./routes/contact")
const Test = require("./routes/test")
const auth = require("./middleware/auth");

// middlewares
app.use(cors())
app.use(express.json())

//mongoDb database connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/buddy-shelter', { useNewUrlParser: true })

app.listen(4000,()=>{
    console.log('Server started')
    console.log(mongoose.connection.readyState);
})

app.use("/api/password-reset", passwordReset);
app.use("/api", userAuthentication);
app.use("/api/pets", pets);
app.use("/api/cart",auth, cart);
app.use("/api/orders",auth, orders);
app.use("/api",Contact)
app.use("/api/test",Test)
