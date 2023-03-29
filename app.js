const express = require('express')
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')
const session = require('express-session')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT 

// middleware for session 
app.use(session({
    secret: process.env.SESSION_SECRET_KEY, 
    saveUninitialized: false, 
    resave: true 
}))

app.use(express.urlencoded())

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

// register the movies router 
app.use('/', moviesRouter)

app.listen(PORT,() => {
    console.log('Server is running...')
})