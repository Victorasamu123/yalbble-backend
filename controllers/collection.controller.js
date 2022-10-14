const collectionModel = require("../models/collection.model");
const addviewlist=(req,res)=>{
    console.log(req.body);
    let{file,category,tag,description,userId,currentuser,username,profilePicture,email}=req.body
    collectionModel.findOne({file:file,category:category,tag:tag,description:description,userId:userId,currentuser:currentuser},(err,result)=>{
        if(err){
            console.log(err);
            res.send({message:"internal server error",status:false});
        }else{
            if(result){
            res.send({message:"design already exists in viewlists",status:true});
            }else{
                let newCollections = new collectionModel({file,category,tag,description,userId,currentuser,username,profilePicture,email})
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
    collectionModel.find({currentuser:req.body.currentuser},(err,result)=>{
       if(err){
        console.log(err)
       }else{
        console.log(result)
        res.send({result:result});
       }
    })
}
const deletecollection =(req,res)=>{
    console.log(req.body);
    collectionModel.findByIdAndDelete(req.body._id,(err,result)=>{
        if(err){
            res.send({message:"internal server error",status:false});
        }else{
            res.send({message:"item deleted successfully",status:true});
        }
    })
}

module.exports= {addviewlist,getviewlists,deletecollection};