import OwnerService from "../services/ownerService";



    let getDetailOwnerById = async(req,res)=>{
        try {
            let infor = await OwnerService.getDetailOwner(req.query.id);
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


let handleCreateNewOwner= async (req,res)=>{
    try {
        let message = await OwnerService.createNewOwner(req.body);
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


module.exports={

    handleCreateNewOwner:handleCreateNewOwner,
    getDetailOwnerById: getDetailOwnerById

}