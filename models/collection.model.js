const mongoose = require("mongoose");

const collectionSchema=mongoose.Schema({
        _id:{type:String},
        file:{type:String},
        category:{type:String},
        tag:{type:String},
        description:{type:String},
        userId:{type:String}
});

const collectionModel= mongoose.model("collection_page",collectionSchema);
module.exports=collectionModel;