const mongoose = require("mongoose");

const addImgSchema=mongoose.Schema({
    file:{required:true,type:String},
    category:{required:true,type:String},
    tag:{required:true,type:String},
    description:{required:true,type:String},
    userId:{required:true,type:String},
    currentuser:{required:true,type:String}
});

const addImgModel = mongoose.model("add_image_collections",addImgSchema);
module.exports= addImgModel;