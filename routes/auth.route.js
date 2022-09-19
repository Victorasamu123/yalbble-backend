const express = require("express");
const { signup } = require("../controllers/auth.controller");
const auth = express.Router()

auth.post("/signup",signup)
module.exports=auth;