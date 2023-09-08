const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }, 
    stock: {
        type: Number, 
        required: true
    },
    catogory: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Game", GameSchema)