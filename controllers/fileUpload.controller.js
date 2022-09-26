const addImgModel = require("../models/addimg.model");
const cloudinary = require("cloudinary");
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
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
        console.log(result.secure_url)
        const myImage= result.secure_url
        // let imgURL=myImage
        // req.body.file=myImage
        // console.log(imgURL)
        // res.send({meassage:"image upload successful",image:myImage,status:true})
        let imgForm= new addImgModel({...req.body,file:myImage});
        console.log(imgForm)
        imgForm.save((err)=>{
            if(err){
              console.log(err)
            }else{
              console.log("save")
                res.send({message:"collections uploaded successfully",status:true})
            }
        })
        // addImgModel.findOne({userId: req.body.userId}, (err, resultant) => {
        //     console.log(resultant)
        //   const fileUpdater=resultant
        //   console.log(fileUpdater.file);
        //   console.log(imgURL);
        //   fileUpdater.file=imgURL
        //   console.log(fileUpdater);
        //   addImgModel.findOneAndUpdate({userId:req.body.userId},fileUpdater,(err,ressult)=>{
        //       if(err){
        //           res.send({message:"error in uploading collections",status:false})
        //       }else{
        //         console.log("connn")
        //           res.send({message:"collections uploaded successfully",status:true})
        //       }
        //   })
        // })
    }
   });
   
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
module.exports={getHome,addFile}