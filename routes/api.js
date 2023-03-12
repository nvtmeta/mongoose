const express = require('express')
const router = express.Router()
const { postCreateCustomer, postArrCustomer } = require('../controller/customerControllers')

router.post('/customers', postCreateCustomer)
router.post('/customers-many', postArrCustomer)


module.exports = router