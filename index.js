const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config()
app.use(cors());
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(express.json({limit:"50mb"}));
const PORT= process.env.PORT
const URI = process.env.URI
mongoose.connect(URI,(err)=>{
    if (err) {
        console.log("error connecting with database")
    } else {
        console.log("connecting with database was successful")
    }
})
app.use(express.urlencoded({extended:true,limit:"50mb"}));
const auth = require("./routes/auth.route");
const fileupload = require("./routes/fileUpload.route");
app.use("/auth",auth);
app.use("/fileuload",fileupload);
app.listen(PORT,()=>{
    console.log(`app listening at port : ${PORT}`)
})