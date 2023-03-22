const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_delete = require('mongoose-delete');
// create model
const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    phone: String,
    email: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// Override all methods
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
