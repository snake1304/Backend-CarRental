import express from "express";
import homeController from "../controllers/homeController";
import carController from "../controllers/carController";
import locationController from "../controllers/locationController";
import rentalController from"../controllers/rentalController";
import ownerController from"../controllers/ownerController";
import locationService from"../services/locationService";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);

    router.get('/api/get-all-cars', carController.handleGetAllCars);

    router.get('/api/get-detail-car-by-id', carController.getDetailCarById);
    router.get('/api/get-detail-rental-by-id', rentalController.getDetailRentalById);
    router.get('/api/get-all-locations', locationController.handleGetAllLocation);
    router.get('/api/get-detail-owner-by-id', ownerController.getDetailOwnerById);




    router.post('/api/create-new-car', carController.handleCreateNewCar);
    router.post('/api/create-new-rental', rentalController.handleCreateNewRental);
    router.post('/api/create-new-location', locationController.handleCreateNewLocation);
    router.post('/api/create-new-owner', ownerController.handleCreateNewOwner);



    router.get('/api/delete-location', locationController.handleDeleteLocation);
    router.get('/api/delete-rental', rentalController.handleDeleteRental);
    router.get('/api/delete-car', carController.handleDeleteCar);


    router.get('put-car',carController.putCar)







    

    return app.use("/", router);
}

module.exports = initWebRoutes;