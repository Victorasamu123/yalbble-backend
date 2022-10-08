const express = require("express");
const {  getHome, addFile, getcollectionpage, deletecollection } = require("../controllers/fileUpload.controller");
const fileupload = express.Router()
fileupload.post("/",addFile)
fileupload.get("/home",getHome)
fileupload.post("/collectionspage",getcollectionpage)
fileupload.post("/deletecollection",deletecollection)
module.exports=fileupload;