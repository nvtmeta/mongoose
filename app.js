const express = require('express')
const connectDB = require('./config/db')
const configViewEngine = require('./config/viewengine')
const app = express()
const methodOverride = require('method-override')
const fileUpload = require('express-fileupload')
const posts = require('./routes/post')

// config file upload
app.use(fileUpload())


//config req.body       //khai bao config req.body at first to avoid undefined
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// method override
app.use(methodOverride('_method'))


// config 
configViewEngine(app)

// connect DB
connectDB()

//init routes
app.use('/', posts)


const PORT = 5000

app.listen(PORT, () => console.log(`server start at ${PORT}`))




