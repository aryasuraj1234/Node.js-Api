const jwt = require("jsonwebtoken");
const jwtkey="users";
const verifytoken=function verifytoken(req,res,next){
    const token = req.headers['authorization'];
    if(token){
    
     console.log("middleare called",token);
     jwt.verify(token,jwtkey,(error,valid)=>{
         if(error){
             // res.send({err})
             res.json("please enter valid token")
         }
         else{
             next();
         }
     })
     
    }
    else{
     res.json("please enter valid token")
    }
 //    console.log("middleare called",token);
 //    next();
 }
 module.exports=verifytoken;