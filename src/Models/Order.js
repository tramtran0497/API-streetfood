const mongoose = require('mongoose')
const validator = require('validator')

const orderSchema = new mongoose.Schema({
    orderId:{
        required: true,
        type: String,
        trim: true,
    }, 
    nameCustomer:{
        required: true,
        type: String,
        trim: true,
    }, 
    addressPoint:{
        required: true,
        type: String,
        trim: true,
    }, 
    timeOrder:{
        required: true,
        type: Date,
    },
    timeTakeOrder:{
        required: true,
        type: Date,
    },
    status:{
        required: true,
        type: String,
        enum: ["Pick up", "Delivery", "Eat In"],
    },
    listProducts:[{
        productName: {
            required: true,
            type: String,
        },
        extra: [{
            type: String,
            trim: true,
        }],
        note: {
            type: String,
            trim: true,
        },
        quantity: {
            required: true,
            type: Number,
        },
    }],
    
})

const Order = mongoose.model("Order", orderSchema)

module.exports = Order