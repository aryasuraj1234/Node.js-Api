
const mongoose = require("mongoose");

const USER=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    
})
// USER.pre('save',async function(next){
//  try {
//     const salt = await genSalt(10);
//  const hashpass= await bcrypt.hash(this.password,salt);
//  this.password=hashpass;
//  next();
//  } catch (error) {
//     next(error)
//  }
// })
module.exports=mongoose.model('users',USER);