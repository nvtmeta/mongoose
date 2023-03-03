const express = require('express')
const connectDB = require('./config/db')
const configViewEngine = require('./config/viewengine')
const app = express()
const methodOverride = require('method-override')
//config req.body       //khai bao config req.body at first to avoid undefined
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

// import routes
const posts = require('./routes/post')
// init app


// config 
configViewEngine(app)

app.use('/', posts)
//init routes

// connect DB
connectDB()



const PORT = 5000

app.listen(PORT, () => console.log(`server start at ${PORT}`))