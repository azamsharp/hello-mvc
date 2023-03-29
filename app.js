const express = require('express')
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')
const app = express()

app.use(express.urlencoded())

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

// register the movies router 
app.use('/', moviesRouter)

app.listen(8080,() => {
    console.log('Server is running...')
})