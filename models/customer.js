const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create model
const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phone: String,
    email: String,
    image: String,
    description: String,

},
    { timestamps: true }
)

module.exports = mongoose.model('Customer', customerSchema) 