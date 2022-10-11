const addImgModel = require("../models/addimg.model");
const cloudinary = require("cloudinary");
const authModel = require("../models/auth.model");
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET,
    secure:true
  });
  let imgURL=""
const addFile =(req,res)=>{
    console.log(req.body)
   const myFile = req.body.file

   cloudinary.v2.uploader.upload(myFile,(err,result)=>{
    if(err){
        console.log("File did not upload")
        res.send({message:"upload failed",status:false})

    }else{
      addImgModel.findOne({category:req.body.category,tag:req.body.tag,description:req.body.description,userId:req.body.userId},(err,resulttt)=>{
        if(err){
          console.log(err)
        }else{
          if(resulttt){
            res.send({message:"collection already exists",status:true})
          }else{
            console.log(result.secure_url)
            const myImage= result.secure_url
            let imgForm= new addImgModel({...req.body,file:myImage});
            console.log(imgForm)
            imgForm.save((err)=>{
            if(err){
              console.log(err)
            }else{
              console.log("save")
                res.send({message:"design uploaded successfully",status:true})
            }
        })
          }
        }
      })
        
    }
   });
   
}
const getcollectionpage=(req,res)=>{
  console.log(req.body);
  addImgModel.find({userId:req.body.userId},(err,result)=>{
    if(err){
      res.send({message:"internal server error",status:false})
    }else{
      res.send({message:"result",status:true,result:result})
    }
  })
}
const deletecollection=(req,res)=>{
  console.log(req.body);
  addImgModel.findByIdAndDelete({_id:req.body._id},(err,result)=>{
    if(err){
      res.send({message:"internal server error",status:false})
    }else{
      res.send({message:"item deleted successfully",status:true});
    }
  })
  
}
const getHome =(req,res)=>{
    addImgModel.find((err,result)=>{
       if(err){
        res.send({message:"server error",status:false})
       }else{
        console.log(result)
        res.send({result:result})
       }
    })

}
module.exports={getHome,addFile,getcollectionpage,deletecollection}