const mongoose = require('mongoose')
const validator = require('validator')

const newSlidesSchema = new mongoose.Schema({
    title:{
        required: true,
        type: String,
        minlength: [4, "The name of product is at least 4 characters, please try again!"],
        trim: true,
    }, 
    subtitle:{
        required: true,
        type: String,
        trim: true,
    }, 
})

const NewSlides = mongoose.model("NewSlides", newSlidesSchema)

module.exports = NewSlides