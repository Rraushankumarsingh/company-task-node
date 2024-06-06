const userModalData = require("../modal/userModal");
const usersData = require("../dummyData/userData");
const md5 = require("md5");

const insultUserData = async () => {
  try {
    const allUserData = usersData.map((user) => ({
      ...user,
      password: md5(user.password),
    }));
    const resultData = await userModalData.insertMany(allUserData);
    console.log(resultData);
  } catch(err){
    console.log("user error from user model",err);
  }
};
module.exports = insultUserData;
