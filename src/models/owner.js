'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Owner.hasMany(models.Car, {foreignKey:'owner_id',targetKey:'keyMap',as:'ownerData'}),
      Owner.belongsTo(models.Location, {foreignKey:'location_id'})
    }
  };
  Owner.init({
    owner_name:DataTypes.STRING,
    owner_address:DataTypes.STRING,
    location_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Owner',
  });
  return Owner;
};