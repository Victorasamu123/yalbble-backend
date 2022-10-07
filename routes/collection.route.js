const express = require("express");
const { addviewlist, getviewlists, deletecollection } = require("../controllers/collection.controller");
const collection = express.Router();

collection.post("/addviewlist",addviewlist);
collection.post("/getviewlists",getviewlists);
collection.post("/deleteviewslist",deletecollection);
module.exports= collection;