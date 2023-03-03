const mongoose = require("mongoose")
const config = require('config')
const db = config.get('mongooseUrl')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            autoIndex: true,
        })

        console.log('Have already coonect to db')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB