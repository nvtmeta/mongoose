const express = require('express')
const router = express.Router()
const { postCreateCustomer, postArrCustomer, getAllCustomers, updateCustomer } = require('../controller/customerControllers')

// create one or many customers
router.post('/customers', postCreateCustomer)
router.post('/customers-many', postArrCustomer)



// get all customers
router.get('/customers', getAllCustomers)

// update customers
router.put('/customers', updateCustomer)

module.exports = router