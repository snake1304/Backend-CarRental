'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rentals', {

    //     Email: DataTypes.STRING,
    // EndDate: DataTypes.STRING,
    // StartDate:DataTypes.STRING,
    // fullName:DataTypes.STRING,
    // phoneL:DataTypes.STRING,
    // dropLocation:DataTypes.STRING,
    // pickLocation:DataTypes.STRING,
    // pay:DataTypes.INTEGER,
    // owner_id:DataTypes.INTEGER,
    // car_id:DataTypes.INTEGER
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Email: {
        type: Sequelize.STRING
      },
      EndDate: {
        type: Sequelize.STRING
      },
      StartDate: {
        type: Sequelize.STRING
      },
      fullName:{
          type:Sequelize.STRING
      },
      phoneL:{
        type:Sequelize.STRING
        },
        dropLocation:{
            type:Sequelize.STRING
        },
        pickLocation:{
            type:Sequelize.STRING
        },
        pay:{
            type:Sequelize.INTEGER
        },
        owner_id:{
            type:Sequelize.STRING
        },
        car_id:{
            type:Sequelize.STRING
        },




      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rentals');
  }
};