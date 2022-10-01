const collectionModel = require("../models/collection.model");

const addcollections=(req,res)=>{
    console.log(req.body);
    let newCollections = new collectionModel(req.body)
    newCollections.save((err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("save successful");
        }
    })
};


module.exports= {addcollections};