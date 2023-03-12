const express = require('express')
const router = express.Router()
const { postCreateCustomer } = require('../controller/customerControllers')

router.post('/customers', postCreateCustomer)


module.exports = router