const express = require("express");
const {  getHome, addFile } = require("../controllers/fileUpload.controller");
const fileupload = express.Router()
fileupload.post("/",addFile)
fileupload.get("/home",getHome)
module.exports=fileupload;