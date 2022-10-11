const express = require("express");
const { signup, email, signin, profilepage, profileUpdate } = require("../controllers/auth.controller");
const auth = express.Router()

auth.post("/signup",signup);
auth.post("/email",email);
auth.post("/signin",signin);
auth.post("/profilepage",profilepage);
auth.post("/profileUpdate",profileUpdate)
module.exports=auth;