const mongoose=require("mongoose")


const userProfileSchema=new mongoose.Schema({
    user_id:{
        type:mongoose.Types.ObjectId
    },
    dob:{
        type:String
    },
    mobileNumber:{
        type:Number
    }
},{timestamps:true})

const userProfileModel=mongoose.model("userProfileModel",userProfileSchema)

module.exports=userProfileModel