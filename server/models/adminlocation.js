'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdminLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdminLocation.belongsTo(models.Admin, {
        foreignKey: 'adminId'
      })
      AdminLocation.belongsTo(models.Location, {
        foreignKey: 'locationId'
      })
    }
  };
  AdminLocation.init({
    adminId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AdminLocation',
  });
  return AdminLocation;
};