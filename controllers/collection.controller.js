const collectionModel = require("../models/collection.model");
const addviewlist=(req,res)=>{
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

const getviewlists=(req,res)=>{
    console.log(req.body);
    collectionModel.find({userId:req.body.userId},(err,result)=>{
       if(err){
        console.log(err)
       }else{
        res.send({resulr:result});
       }
    })
}


module.exports= {addviewlist,getviewlists};