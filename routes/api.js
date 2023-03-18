const express = require('express');
const router = express.Router();
const {
  postCreateCustomer,
  postArrCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  deleteArrCustomer,
} = require('../controller/customerControllers');

// create one or many customers
router.post('/customers', postCreateCustomer);
router.post('/customers-many', postArrCustomer);

// get all customers
router.get('/customers', getAllCustomers);

// update customers
router.put('/customers', updateCustomer);

// delete one or array customers
router.delete('/customers', deleteCustomer);
router.delete('/customers-many', deleteArrCustomer);

module.exports = router;
