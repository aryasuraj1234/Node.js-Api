const exp = require("express");
const router = exp.Router();
const verifytoken= require("../middlewares/index");

const jwt = require("jsonwebtoken");
const jwtkey="users";
const{find,findOne,create,del,update}=require("../controllers/student");
router.get('/',verifytoken,find);
router.get("/:studentId",findOne);
router.post("/",create);
router.delete("/:studentId",del);
router.put("/:studentId",update);
module.exports=router;