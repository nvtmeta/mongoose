const { uploadSingle } = require('../services/fileService')
const { createCustomerService, createArrCustomerService, getCustomers } = require('../services/customerService')
// {key: value}
module.exports = {
    postCreateCustomer: async (req, res) => {
        // get data
        let { name, address, phone, email, image, description } = req.body
        console.log(req.body)

        // image:string
        let imageUrl = ''
        if (!req.files || Object.keys(req.files).length === 0) {
            // do nothing
        } else {
            let result = await uploadSingle(req.files.image)
            console.log(result)
            imageUrl = result.path
        }
        // deliver to services
        let customerData = {
            name, address, phone, email, image, description
        }
        let customer = await createCustomerService(customerData)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },

    postArrCustomer: async (req, res) => {
        let customers = await createArrCustomerService(req.body.customers)
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        }
        else {
            return res.status(400).json({
                EC: -1,
                data: customers
            })
        }
    },


    getAllCustomers: async (req, res) => {
        let customers = await getCustomers()
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        } else {
            return res.status(400).json({
                EC: -1,
                data: customers
            })
        }
    }
} 