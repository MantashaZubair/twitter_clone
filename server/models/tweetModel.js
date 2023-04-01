const mongoose = require("mongoose")

const  tweetSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
       },
      likes:{
        type:Array,
        defaultValue:[]
      },
      image:{
        type:String,
      }
  
        
},{timestamps:true})


module.exports= mongoose.model("tweet" , tweetSchema)