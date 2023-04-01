const userModels = require("../models/userModels")
const tweetModel = require("../models/tweetModel")
const { hashPassword } = require("../helpers/authHelper")
const JWT = require("jsonwebtoken")

//get user with userid

// const getUserController = async(req,res)=>{
//   try {
//     const user = await userModels.findById(req.params.id)
//     res.status(200).json(user)
//   } catch (error) {
//     console.log(error)
//   }
// }
const getUserController = async(req,res)=>{
try {
    const user = await userModels.findById(req.params.id)
    if(user){
      const {password, ...otherDetails} = user._doc
      res.status(200).json(otherDetails )
    }else{
      res.status(404).send({
        success:false,
        message:"No such user exists"
    })
    }

   
} catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Some thing went wrong while getting user",
      error
    })  
  }
}


const updateProfileController =async(req,res)=>{  
 const id = req.params.id;
 const {_id,password} = req.body;
 if(id===_id){
  try {
      
        //password
        if(password && password.length < 6){
          return res.json({error:"password is required and 6 character long"})
      }
      //hashedpassword
      const hashedPassword = password ? await hashPassword(password) : undefined;
      req.body.password= hashedPassword
      const user= await userModels.findByIdAndUpdate(id,req.body,{new:true})
      
      res.status(200).json(user)
  
  } catch (error) {
      console.log(error)
         res.status(500).send({
      success:false,
      message:"Some thing went wrong while updating user",
      error
    }) 
  }
}else{
  res.status(403).json("Access Denied! you can update only own profile")
}
  }



const deleteUserController = async(req,res)=>{
  const id = req.params.id;
  const {_id} = req.body;
  if (id === _id ) {
  try { 
    await userModels.findByIdAndDelete(id);
     await tweetModel.removeAllListeners({userId:id});
    res.status(200).send({
      success:true,
      message:"Successfully deleted user profile"
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      message:"Some thing went wrong while deleting user",
      error
    }) 
  }
}else{
  res.status(403).json("Access Denied! you can delete only own profile")
}
}

//follow userController
const followUserController = async(req,res)=>{
try {
  const user = await userModels.findById(req.params.id);
  const currentUser = await userModels.findById(req.body.id);
  if (!user.followers.includes(req.body.id)){
    await user.updateOne({
      $push:{followers:req.body.id}
    });
    await currentUser.updateOne({$push: { following:req.params.id},})
  }else{
    res.status(403).json("you already follow this user")
  }
  res.status(200).send({
    success:true,
    message:"following the user"
  })
} catch (error) {
  console.log(error)
  res.status(500).send({
    success:false,
    message:"Some thing went wrong while following user",
    error
  }) 
}
}

//unfollow userController
const unfollowUserController = async (req,res)=>{
try {
  const user = await userModels.findById(req.params.id)
  const currentUser = await userModels.findById(req.body.id)
  if (currentUser.following.includes(req.params.id)){
    await user.updateOne({
      $pull:{followers:req.body.id}
    })
    await currentUser.updateOne({$pull: { following:req.params.id}})
  }else{
    res.status(403).json("you unfollow this user")
  }
  res.status(200).send({
    success:true,
    message:"unfollowing the user"
  })
} catch (error) {
  console.log(error)
  res.status(500).send({
    success:false,
    message:"Some thing went wrong while unfollowing user",
    error
  })
}
}

module.exports = {
  getUserController,
  updateProfileController,
  deleteUserController,
  followUserController,
  unfollowUserController}