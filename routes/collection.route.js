const express = require("express");
const { addcollections } = require("../controllers/collection.controller");
const collection = express.Router();

collection.post("/addcollections",addcollections)

module.exports= collection;