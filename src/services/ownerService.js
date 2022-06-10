import db from "../models/index";


let getDetailOwner = (inputId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!inputId){
                resolve({
                    errCode:1,
                    errMessage:"Missing required param"
                })
            } if(inputId=="All"){
                let data = await db.Owner.findAll({ 
                                                      
                   
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode:0,
                    data: data
                })
            }
            else{
                let data = await db.Owner.findOne({
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


let createNewOwner=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            await db.Owner.create({
                owner_name:data.owner_name,
                owner_address:data.owner_address,
                location_id:data.location_id,                
                
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

module.exports={
    getDetailOwner:getDetailOwner,
    createNewOwner:createNewOwner
}