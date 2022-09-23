const addImgModel = require("../models/addimg.model");
const cloudinary = require("cloudinary");
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
  const imgURL=""
const addFile =(req,res)=>{
   const myFile = req.body.file

   cloudinary.v2.uploader.upload(myFile,(err,result)=>{
    if(err){
        console.log("File did not upload")
        res.send({message:"upload failed",status:false})

    }else{
        const myImage= result.secure_url
        imgURL=myImage
        res.send({meassage:"image upload successful",image:myImage,status:true})
        let imgForm= new addImgModel(req.body);
        imgForm.save((err)=>{
            if(err){
              console.log(err)
            }else{
              addImgModel.findOne({file: req.body.file}, (err, resultant) => {
                let fileUpdater=resultant
                fileUpdater.file=imgURL
                console.log(fileUpdater);
                addImgModel.findOneAndUpdate({userId:req.body.userId},fileUpdater,(err,ressult)=>{
                    if(err){
                        res.send({message:"error in uploading collections",status:false})
                    }else{
                        res.send({message:"collections uploaded successfully",status:true})
                    }
                })
              })
            }
        })
    }
   });
   
}
const getHome =(req,res)=>{
    addImgModel.find((err,result)=>{
       if(err){
        res.send({message:"server error",status:false})
       }else{
        res.send({message:"all collections sent",status:true,allcollections:result})
       }
    })
}
module.exports={addFile,getHome}