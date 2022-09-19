const express = require("express");
const { signup, email } = require("../controllers/auth.controller");
const auth = express.Router()

auth.post("/signup",signup)
auth.post("/email",email)
module.exports=auth;