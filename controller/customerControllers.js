const { uploadSingle } = require('../services/fileService');
const {
  createCustomerService,
  createArrCustomerService,
  getCustomers,
  updateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
} = require('../services/customerService');
const Joi = require('joi');

// {key: value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    // get data
    let { name, address, phone, email, image, description } = req.body;

    // validation with Joi
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      password: Joi.string().pattern(new RegExp('^[0-9]{3,8}$')),
      email: Joi.string().email(),
      description: Joi.string(),
      address: Joi.string(),
      phone: Joi.number(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(200).json(error);
    } else {
      // image:string
      let imageUrl = '';
      if (!req.files || Object.keys(req.files).length === 0) {
        // do nothing
      } else {
        let result = await uploadSingle(req.files.image);
        console.log(result);
        imageUrl = result.path;
      }
      // deliver to services
      let customerData = {
        name,
        address,
        phone,
        email,
        image,
        description,
      };
      let customer = await createCustomerService(customerData);
      return res.status(200).json({
        EC: 0,
        data: customer,
      });
    }
  },

  postArrCustomer: async (req, res) => {
    let customers = await createArrCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: customers,
      });
    }
  },

  getAllCustomers: async (req, res) => {
    const limit = req.query.limit;
    const page = req.query.page;
    let customers = null;
    if (limit && page) {
      customers = await getCustomers(limit, page, req.query);
    } else {
      customers = await getCustomers();
    }
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: customers,
      });
    }
  },

  updateCustomer: async (req, res) => {
    const { _id, name, email, address } = req.body;
    const customerUpdated = await updateCustomerService(
      _id,
      name,
      email,
      address
    );
    if (customerUpdated) {
      return res.status(200).json({
        EC: 0,
        data: customerUpdated,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: customerUpdated,
      });
    }
  },

  deleteCustomer: async (req, res) => {
    let id = req.body.id;

    let result = await deleteCustomerService(id);
    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: result,
      });
    }
  },

  deleteArrCustomer: async (req, res) => {
    let customersId = req.body.customersId;
    let result = await deleteArrCustomerService(customersId);
    if (result) {
      return res.status(200).json({
        EC: 0,
        data: result,
      });
    } else {
      return res.status(400).json({
        EC: -1,
        data: result,
      });
    }
  },
};
