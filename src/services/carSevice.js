import db from "../models/index";


let getAllCars=(carId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            
            let cars='';
            if(carId==="All"){
                cars = await data.findAll({

                });
            }
            if(carId && carId !=='All'){
                cars =await data.findOne({
                    where:{id:carId}
                })
            }
            resolve(cars)
        } catch (error) {
            reject(error);
        }
    })
}
let getDetailCarById = (inputId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!inputId){
                resolve({
                    errCode:1,
                    errMessage:"Missing required param"
                })
            } if(inputId=="All"){
                let data = await db.Car.findAll({                                     
                    include:[{
                        model: db.Owner,
                        include:[{
                            model: db.Location
                        }]
                    }],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode:0,
                    data: data
                })
            }
            else{
                let data = await db.Car.findOne({
                    where:{
                        id: inputId
                        
                    },
                    include:[{
                        model: db.Owner,
                        include:[{
                            model: db.Location
                        }]
                    }],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode:0,
                    data: data
                })
            }
        } catch (error) {
            reject(error);
        }
    })

}
let createNewCar=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            await db.Car.create({
                car_name:data.carName,
                car_description:data.carDescription,
                car_model_year:data.carModelYear,
                car_brand:data.carBrand,
                color:data.carColor,
                capacity:data.carCapacity,
                luggage_storage:data.luggageStorage,
                status:data.carStatus,
                owner_id:data.carOwnerId,
                car_image:data.carImage,
                car_price:data.carPrice,
                
            }
        //     ,{
        //         fields: ["carName", "carDescription","carModelYear","carBrand","carColor",
        //         "carCapacity","luggageStorage","carStatus","carOwnerId","carImage","carPrice"] 
        //    }
            )
           
            resolve({
                errCode:1,
                message:"oke"
            })
        } catch (error) {
            reject(error);
        }
    })
}

let deleteCarById=(carId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let car = await db.Car.findOne({
                where:{id:carId}
            })
            if(car){
                await car.destroy();
            }
            
        } catch (error) {
            reject(error);
        }
    })
}
let UpdateCarData=(carId,data)=>{
    return new Promise(async (resolve,reject)=>{
    try {
        let car= await db.Car.findOne({
            where:{id:carId}
        })
        if(car){
            car.status= data.status;
            await car.save();
            resolve();
        }
    } catch (error) {
        console.log(error);
    }
    })
}

module.exports={
    getAllCars:getAllCars,
    getDetailCarById:getDetailCarById,
    createNewCar:createNewCar,
    deleteCarById:deleteCarById,
    UpdateCarData:UpdateCarData
}