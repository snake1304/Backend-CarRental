import rentalService from "../services/rentalService";



let handleCreateNewRental= async (req,res)=>{
    try {
        let message = await rentalService.createNewRental(req.body);
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


let getDetailRentalById = async(req,res)=>{
    try {
        let infor = await rentalService.getDetailRentalById(req.query.id);
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
let handleDeleteRental =async (req,res)=>{
    let id = req.query.id;
    if(id){
        await rentalService.deleteRentalById(id);
        return res.send("deleted")
    }
    else{
        return res.send("cannot delete")
    }
}


module.exports={

handleCreateNewRental:handleCreateNewRental,
getDetailRentalById:getDetailRentalById,
handleDeleteRental:handleDeleteRental
}