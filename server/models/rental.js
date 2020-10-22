'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rental.init({
    start: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};