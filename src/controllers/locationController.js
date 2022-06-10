import locationService from "../services/locationService";



let handleGetAllLocation = async(req,res)=>{
    try {
        let infor = await locationService.getDetailLocation(req.query.id);
        return res.status(200).json(
            infor
        )
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode:0,
            errMessage:'error',
            })
    }
}


let handleCreateNewLocation= async (req,res)=>{
    try {
        let message = await locationService.createNewLocation(req.body);
        console.log(req.body)
        console.log(message);
        return res.status(200).json(message);
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode:0,
            errMessage:'error',
            })
    }
}
let handleDeleteLocation= async (req,res)=>{
    let id = req.query.id;
    if(id){
        await locationService.deleteLocationById(id);
        return res.send("deleted")
    }
    else{
        return res.send("cannot delete")
    }
}


module.exports={

    handleCreateNewLocation:handleCreateNewLocation,
    handleGetAllLocation:handleGetAllLocation,
    handleDeleteLocation:handleDeleteLocation
}