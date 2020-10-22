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
      Location.hasMany(models.Admin,{
        foreignKey: 'adminId'
      })
      Location.belongsToMany(models.User, { through: 'Unit', foreignKey: 'userId' }) 
    }
  };
  Location.init({
    address: DataTypes.STRING,
    adminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};