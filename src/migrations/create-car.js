'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_name: {
        type: Sequelize.STRING
      },
      car_description: {
        type: Sequelize.STRING
      },
      car_model_year: {
        type: Sequelize.STRING
      },
      car_brand: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      luggage_storage: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      owner_id: {
        type: Sequelize.INTEGER
      },
      car_image: {
        type: Sequelize.STRING
      },
      car_price:{
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Cars');
  }
};
