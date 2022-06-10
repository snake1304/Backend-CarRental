const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("CarRental", "car_admin", "Qq123456789", {
	host: "139.59.104.129",
	port: 3306,
	dialect: "mysql",
	logging: false,
});

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
module.exports = connectDB;
