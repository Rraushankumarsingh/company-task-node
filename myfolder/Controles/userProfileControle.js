const useProfileModel=require("../modal/userProfileModal")
const userProfileData=require("../dummyData/userprofrofileData")



const userProfileFunction= async ()=>{
    let useAllData=userProfileData.map((users,index)=>({
        use_id:users._id,
        dob:userProfileData[index].dob,
        mobileNumber:userProfileData[index].mobileNumber

    }))
     let allProfileDataInsult=await useProfileModel.insertMany(useAllData)
    //  console.log(allProfileDataInsult);
}
module.exports=userProfileFunction