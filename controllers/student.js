const Student = require("../models/student");
const find =async(req,res)=>{
    try {
        const students=await Student.find();
        res.json(students);
    } catch (error) {
        res.json(error);
    }
}

const findOne=async(req,res)=>{
    const studentId=req.params.studentId;
    try {
        const student =await Student.findById(studentId);
        res.json(student);
    }catch (error) {
        res.json(error);
    }
}

const create=async(req,res)=>{
    try {
        const newStudent= await Student.create(req.body);
        res.json(newStudent);
    } catch (error) {
        res.json(error);
    }
}
const del=async(req,res)=>{
    try {
        const result = await Student.findOneAndDelete({_id:req.params.studentId });
        console.log(result);

        res.status(200).json({
            "msg":"done"
        })
        
       } catch (error) {
        res.json(error)
       }
}

const update=async(req,res)=>{
    const studentId=req.params.studentId;
    try {
        const updateStudent=await Student.updateOne({
            "_id":studentId
        },
        re.body
        )
        res.json(updateStudent);
    } catch (error){
        res.json(error);
    }
}
module.exports = {find,findOne,create,del,update}