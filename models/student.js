const mongoose= require("mongoose");

const STUDENT=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    roll_NO:{
        type:Number,
        require:true
    },
    section:{
        type:String,
        require:true
    },
    cls:{
       type:Number,
       require:true
    }
})

module.exports=mongoose.model("students",STUDENT); 