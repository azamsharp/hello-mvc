'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Movie.hasMany(models.Review, { as: 'reviews', foreignKey: 'movie_id' })

      //models.Movie.hasMany(models.Actor, {as: 'actors', foreignKey: 'movie_id'})
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};