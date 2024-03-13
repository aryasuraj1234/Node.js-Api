const User = require("../models/user");
const jwt = require("jsonwebtoken");
const jwtkey="users";
const bcrypt = require('bcrypt');

const resistration = async(req,res)=>{
    try {
        let newuser=await User.create(req.body);
        let result= await newuser.save()
           
        // console.log(result);
        // result = result.toObject();
        // delete result.password;
        // res.json(result);
        const salt =await bcrypt.genSalt(10);
      const secpass=await bcrypt.hash(req.body.password,salt);
    //   console.log(secpass);
        result =await User.create({
            name:req.body.name,
             email:req.body.email,
            password:secpass
        })
       
        jwt.sign({result},jwtkey,(err,token)=>{
            if(err){
                res.json({"message":"no user find"})
            }
            res.status(200).json( { result , auth:token});
        })
      
        // console.log(result);

      } catch (error) {
        res.json(error);
      }
    
}

const login = async(req,res)=>{
    try {

        if(req.body.password && req.body.email){

          const finduser = await User.findOne(req.body);
          const salt =await bcrypt.genSalt(10);
          const secpass=await bcrypt.hash(req.body.password,salt);
          console.log(secpass);
            result =await User.create({
                name:req.body.name,
                 email:req.body.email,
                password:secpass
            })
      console.log(result)
const match=await bcrypt.compare(finduser.password,secpass);
        //   console.log(secpass);
    if (match) {
            // Passwords match.........//
    jwt.sign({match},jwtkey,(err,token)=>{
                if(err){
    res.json('Login failed: incorrect password');
                }
    else{
                    res.status(200).json({ 
                    "message":"Login successfully",     
                    match , auth:token});
                }
    })
            // res.json('Login successful');
            // Proceed with login logic (e.g., creating a session)
    } else {
            // Passwords don't match
          res.json('Login failed: incorrect password');
    }
        





            // finduser =await User.findOne({
            //     name:req.body.name,
            //     email:req.body.email,
            //     password:secpass
            // })
        // if(finduser){
        //     jwt.sign({finduser},jwtkey,(err,token)=>{
        //         if(err){
        //             res.json({"message":"no user find"})
        //         }
        //         res.status(200).json( { finduser , auth:token});
        //     })
            
        // }
        // else{
        //     res.json({"message":"no user find"})
        // }
        // }
        // else{
        //  res.json({"message":"no user find"})
        // }
        }  
    } catch (error){
        res.json(error);
    }
}
module.exports={resistration,login};