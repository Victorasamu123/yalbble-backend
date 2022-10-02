const collectionModel = require("../models/collection.model");
const addviewlist=(req,res)=>{
    console.log(req.body);
    let{file,category,tag,description,userId}=req.body
    collectionModel.findOne({file:file,category:category,tag:tag,description:description},(err,result)=>{
        if(err){
            console.log(err);
            res.send({message:"internal server error",status:false});
        }else{
            if(result){
            res.send({message:"design already exists in viewlists",status:true});
            }else{
                let newCollections = new collectionModel({file,category,tag,description,userId})
                newCollections.save((err)=>{
                    if(err){
                        console.log(err);
                        res.send({message:"internal server error",status:false});
                    }else{
                        console.log("save successful");
                        res.send({message:"added successfully",status:true});
                    }
                })
            }
        }
    })
    
};

const getviewlists=(req,res)=>{
    console.log(req.body);
    collectionModel.find({userId:req.body.userId},(err,result)=>{
       if(err){
        console.log(err)
       }else{
        console.log(result)
        res.send({result:result});
       }
    })
}


module.exports= {addviewlist,getviewlists};