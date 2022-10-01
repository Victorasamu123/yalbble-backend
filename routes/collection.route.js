const express = require("express");
const { addviewlist, getviewlists } = require("../controllers/collection.controller");
const collection = express.Router();

collection.post("/addviewlist",addviewlist);
collection.post("/getviewlists",getviewlists);

module.exports= collection;