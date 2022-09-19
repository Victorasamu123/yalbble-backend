const authModel = require("../models/auth.model");

const signup=(req,res)=>{
    console.log(req.body);
    authModel.findOne({email:req.body.email},(err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"signup not succesful",status:false})
        }else{
            if(result){
                res.send({message:"email already exists",status:false})
            }else{
                let form = authModel(req.body);
                form.save((err)=>{
                    if(err){
                        console.log(err)
                        res.send({message:"signup not succesful",status:false})
                    }else{
                        res.send({message:"signup successfuul",status:true})
                    }
                })
            }
        }
    })
    
}

module.exports={signup
}