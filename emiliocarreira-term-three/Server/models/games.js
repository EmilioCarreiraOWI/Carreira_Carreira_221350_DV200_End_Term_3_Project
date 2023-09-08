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
    date: {
        type: String, 
        required: true
    },
    ganre: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    info: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Game", GameSchema)