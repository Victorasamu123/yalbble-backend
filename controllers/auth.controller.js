const authModel = require("../models/auth.model");
const nodemailer = require('nodemailer');
const PASSWORD= process.env.PASSWORD
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
const email =(req,res)=>{
    console.log(req.body.email)

    const emailMessage = ` <center>
    <div style="background-color:rgb(28,29,61); width: fit-content;height:fit-content;">
      <h1 style="color: white;">welcome to myQuiz app</h1>
      <div>
        Dear ${req.body.lastname} ${req.body.firstname}
      </div style="color: white;">
      <div style="color: white;">
        Welcome and thank you for<br>
        registering! you can now start <br>
        creating and rerecreating designs, we have differeents plans<br>
        for you enjoy!!!💕💕💕👌
      </div>
    </div>
</center>`
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'asamuvictor03@gmail.com',
      pass: PASSWORD
    }
  });
  
  const mailOptions = {
    from: 'asamuvictor03@gmail.com',
    to: req.body.email,
    subject: 'from the desk of the ceo',
    // text: 'That was easy!'
    html:emailMessage
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports={signup,email
}