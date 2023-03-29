
const models = require('../models')


const fetchMovies = async (req, res) => {
    const movies = await models.Movie.findAll({})
    res.render('index', { movies: movies })
}

const addMovie = async (req, res) => {
    const title = req.body.title 
    const year = parseInt(req.body.year) 

    const movie = models.Movie.build({
        title: title, 
        year: year 
    })

    const savedMovie = await movie.save()
    res.redirect('/')
}

module.exports = {
    fetchMovies, 
    addMovie
}