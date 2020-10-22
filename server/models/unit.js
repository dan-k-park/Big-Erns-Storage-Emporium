'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unit.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Unit.belongsTo(models.Location, {
        foreignKey: 'locationId'
      })
    }
  };
  Unit.init({
    rented: DataTypes.BOOLEAN,
    start: DataTypes.DATEONLY,
    price: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Unit',
  });
  return Unit;
};