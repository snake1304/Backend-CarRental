import db from "../models/index";
import axios from 'axios';

let getDetailLocation = (inputId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!inputId){
                resolve({
                    errCode:1,
                    errMessage:"Missing required param"
                })
            } if(inputId=="All"){
                let data = await db.Location.findAll({ 
                                                      
                   
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode:0,
                    data: data
                })
            }
            else{
                let data = await db.Location.findOne({
                    where:{
                        id: inputId
                        
                    },
                    
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


let createNewLocation=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            await db.Location.create({
                Location_name:data.Location_name,
                location_rental:data.location_rental,
                location_return:data.location_return,                
                
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

let deleteLocationById=(locationId)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            let location = await db.Location.findOne({
                where:{id:locationId}
            })
            if(location){
                await location.destroy();
            }
            
        } catch (error) {
            reject(error);
        }
    })
}
module.exports={
    getDetailLocation:getDetailLocation,
    createNewLocation:createNewLocation,
    deleteLocationById:deleteLocationById
}