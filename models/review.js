'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //  YOU DO NOT NEED THIS RELATIONSHIP FOR THE BLOG/MOVIE APPLICATION 
      models.Review.belongsTo(models.Movie, { as: 'movie', foreignKey: 'movie_id'})
    }
  };
  Review.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    movie_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};