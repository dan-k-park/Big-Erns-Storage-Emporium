'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.hasMany(models.Unit, {
        foreignKey: 'locationId'
      })
    }
  };
  Location.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    num25: DataTypes.INTEGER,
    num75: DataTypes.INTEGER,
    num150: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};