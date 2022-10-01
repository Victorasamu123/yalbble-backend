const express = require("express");
const { signup, email, signin, updateprofilepics } = require("../controllers/auth.controller");
const auth = express.Router()

auth.post("/signup",signup);
auth.post("/email",email);
auth.post("/signin",signin);
auth.post("/updateprofileppics",updateprofilepics);
module.exports=auth;