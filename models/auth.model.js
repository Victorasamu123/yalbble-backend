const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const authSchema= mongoose.Schema({
    firstname:{required:true,type:String},
    lastname:{required:true,type:String},
    email:{required:true,type:String,unique:true},
    password:{required:true,type:String}
})

const saltRound=10;
authSchema.pre("save",function(next){
    console.log(this.password)
    bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
        if(!err){
            console.log(hashedPassword)
            this.password=hashedPassword
            next()
        }
    })
})

const authModel= mongoose.model("auth-signup-users",authSchema);
module.exports=authModel;