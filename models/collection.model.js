const mongoose = require("mongoose");

const collectionSchema=mongoose.Schema({
    file:{type:String},
    category:{type:String},
    tag:{type:String},
    description:{type:String},
    userId:{type:String},
    _v:{type:Number},
    _id:{type:String},
});

const collectionModel= mongoose.model("collection_page",collectionSchema);
module.exports=collectionModel;