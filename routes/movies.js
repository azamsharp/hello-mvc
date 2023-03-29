const express = require('express')
const router = express.Router() 
const moviesController = require('../controllers/moviesController')

router.get('/', moviesController.fetchMovies)
router.post('/add-movie', moviesController.addMovie)

module.exports = router 