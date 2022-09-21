const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const authSchema= mongoose.Schema({
    fullname:{required:true,type:String},
    username:{required:true,type:String,unique:true},
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
authSchema.methods.validatePassword = function(password,callback){
    bcrypt.compare(password,this.password,(err,same)=>{
        console.log(same)
        if(!err){
            callback(err,same)
        }else{
            next()
        }
    })
}
const authModel= mongoose.model("auth-signup-users",authSchema);
module.exports=authModel;