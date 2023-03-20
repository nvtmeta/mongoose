const aqp = require('api-query-params');
const Customer = require('../models/customer');

const createCustomerService = async (customerData) => {
  try {
    const res = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      image: customerData.image,
      description: customerData.description,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createArrCustomerService = async (arr) => {
  try {
    const res = await Customer.insertMany(arr);
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCustomers = async (limit, page, queryString) => {
  try {
    let res = null;
    if (limit && page) {
      let offset = (page - 1) * limit;

      const { filter } = aqp(queryString);
      delete filter.page;

      res = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      res = await Customer.find({});
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

const updateCustomerService = async (_id, name, email, address) => {
  console.log(_id, name, email, address);
  try {
    const res = await Customer.updateOne(
      { _id: _id },
      { name, address, email }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteCustomerService = async (id) => {
  console.log(id);
  try {
    const res = await Customer.deleteById(id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteArrCustomerService = async (customersId) => {
  try {
    console.log(customersId);
    const res = await Customer.delete({ _id: { $in: customersId } });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createCustomerService,
  createArrCustomerService,
  getCustomers,
  updateCustomerService,
  deleteCustomerService,
  deleteArrCustomerService,
};
