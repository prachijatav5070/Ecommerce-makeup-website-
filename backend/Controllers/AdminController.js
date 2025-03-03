const AdminModel=require('../Models/AdminModel')

const AdminLogin=async(req ,res)=>{
const {adminid, adminpassword}=req.body;
try {
    const admin= await AdminModel.findOne({adminid});
    if(!admin){
        return res.status(404).json({msg:"admin id incorrect"})
    }
    if(admin.adminpassword !== adminpassword){
        return res.status(401).json({msg:"admin password incorrect"})

    }
    return res.status(200).json({msg:"admin login successfull", adminid:admin.adminid, adminpassword:admin.adminpassword})

} catch (error) {
    console.log(error)
}
}

module.exports={
    AdminLogin,
}