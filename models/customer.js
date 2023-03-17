const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoose_delete = require('mongoose-delete');
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

customerSchema.plugin(mongoose_delete);


module.exports = mongoose.model('Customer', customerSchema) 