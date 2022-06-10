'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.Owner, {foreignKey:'owner_id'})
    }
  };
  Car.init({
    car_name: DataTypes.STRING,
    car_description:DataTypes.STRING,
    car_model_year: DataTypes.STRING,
    car_brand: DataTypes.STRING,
    color:DataTypes.STRING,
    capacity:DataTypes.STRING,
    luggage_storage:DataTypes.STRING,
    status:DataTypes.INTEGER,
    owner_id:DataTypes.INTEGER,
    car_image:DataTypes.STRING,
    car_price:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};
