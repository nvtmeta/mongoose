const Customer = require('../models/customer')

const createCustomerService = async (customerData) => {
    try {
        const res = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            image: customerData.image,
            description: customerData.description
        })
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}


const createArrCustomerService = async (arr) => {
    try {
        const res = await Customer.insertMany(arr)
        return res
    } catch (error) {
        console.log(error)
        return null
    }
}
module.exports = {
    createCustomerService, createArrCustomerService
}