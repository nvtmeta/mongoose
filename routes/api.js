const express = require('express')
const router = express.Router()
const { postCreateCustomer, postArrCustomer, getAllCustomers } = require('../controller/customerControllers')

router.post('/customers', postCreateCustomer)
router.post('/customers-many', postArrCustomer)

// get all customers
router.get('/customers', getAllCustomers)

module.exports = router