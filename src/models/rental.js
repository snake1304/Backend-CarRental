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
      Rental.belongsTo(models.Car, {foreignKey:'car_id'}),

      Rental.belongsTo(models.Owner, {foreignKey:'owner_id'})



    }
  };
  Rental.init({
    Email: DataTypes.STRING,
    EndDate: DataTypes.STRING,
    StartDate:DataTypes.STRING,
    fullName:DataTypes.STRING,
    phoneL:DataTypes.STRING,
    dropLocation:DataTypes.STRING,
    pickLocation:DataTypes.STRING,
    pay:DataTypes.INTEGER,
    owner_id:DataTypes.INTEGER,
    car_id:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rental',
  });
  return Rental;
};
