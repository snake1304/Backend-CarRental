import db from "../models/index";




let createNewRental=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {

            // Email: DataTypes.STRING,
            // EndDate: DataTypes.STRING,
            // StartDate:DataTypes.STRING,
            // fullName:DataTypes.STRING,
            // phoneL:DataTypes.STRING,
            // dropLocation:DataTypes.STRING,
            // pickLocation:DataTypes.STRING,
            // pay:DataTypes.INTEGER,
            // owner_id:DataTypes.INTEGER,
            // car_id:DataTypes.INTEGER
            await db.Rental.create({

                Email:data.Email,
                StartDate:data.StartDate,
                EndDate:data.EndDate,
                fullName:data.fullName,
                phoneL:data.phoneL,
                dropLocation:data.dropLocation,
                pickLocation:data.pickLocation,
                pay:data.pay,
                owner_id:data.owner_id,
                car_id:data.car_id            


                

                
            }
 
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


let getDetailRentalById = (inputId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!inputId){
                resolve({
                    errCode:1,
                    errMessage:"Missing required param"
                })
            } if(inputId=="All"){
                let data = await db.Rental.findAll({                                     
                    include:[{                      
                        model: db.Car,
                        include:[{
                            model: db.Owner,
                            include:[{
                                model: db.Location
                            }]
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
                let data = await db.Rental.findOne({
                    where:{
                        id: inputId
                        
                    },
                    include:[{
                        model: db.Car,
                        include:[{
                            model: db.Owner,
                            include:[{
                                model: db.Location
                            }]
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

let deleteRentalById=(rentalId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let rental = await db.Rental.findOne({
                where:{id:rentalId}
            })
            if(rental){
                await rental.destroy();
            }
            
        } catch (error) {
            reject(error);
        }
    })
}
module.exports={

createNewRental:createNewRental,
getDetailRentalById:getDetailRentalById,
deleteRentalById:deleteRentalById
}
