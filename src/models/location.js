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
      Location.hasMany(models.Owner, {foreignKey:'location_id',targetKey:'keyMap',as:'LocationData'})
    }
  };
  Location.init({
    Location_name: DataTypes.STRING,
    location_rental:DataTypes.STRING,
    location_return:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};