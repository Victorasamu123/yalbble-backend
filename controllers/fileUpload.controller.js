const cloudinary = require("cloudinary");
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
const addFile =(req,res)=>{
   const myFile = req.body.file

   cloudinary.v2.uploader.upload(myFile,(err,result)=>{
    if(err){
        console.log("File did not upload")
        res.send({message:"upload failed"})

    }else{
        const myImage= result.secure_url
        res.send({meassage:"image upload successful",image:myImage})
    }
   });
   
}