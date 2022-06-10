const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('d9abdq6ecp1u3k', 'gvtwrizdcjgtun', '2f8b0c3118c39a00d5cbbb397f41643bb9c7963a7f79310623718220bf7be750', {
  host: 'ec2-54-165-184-219.compute-1.amazonaws.com',
  dialect: 'postgres',
  logging:false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }

}); 

let connectDB= async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = connectDB;