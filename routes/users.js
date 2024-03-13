const exp = require("express");
const router = exp.Router();
const jwt = require("jsonwebtoken");
const jwtkey="users";
const {resistration,login}=require('../controllers/user')
router.post('/resis',resistration);
router.post('/login',login);
module.exports=router;
