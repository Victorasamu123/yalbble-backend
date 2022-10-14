const mongoose = require("mongoose");

const collectionSchema=mongoose.Schema({
    file:{type:String},
    category:{type:String},
    tag:{type:String},
    description:{type:String},
    userId:{type:String},
    currentuser:{required:true,type:String},
    username:{required:true,type:String},
    profilePicture:{required:true,type:String},
    email:{required:true,type:String}
});

const collectionModel= mongoose.model("collection_page",collectionSchema);
module.exports=collectionModel;