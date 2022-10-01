const mongoose = require("mongoose");

const collectionSchema=mongoose.Schema({
        _id:{required:true,type:String},
        file:{required:true,type:String},
        category:{required:true,type:String},
        tag:{required:true,type:String},
        description:{required:true,type:String},
        userId:{required:true,type:String}
});

const collectionModel= mongoose.model("collection_page",collectionSchema);
module.exports=collectionModel;