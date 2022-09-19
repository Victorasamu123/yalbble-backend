const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config()
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT= process.env.PORT
const URI = process.env.URI
mongoose.connect(URI,(err)=>{
    if (err) {
        console.log("error connecting with database")
    } else {
        console.log("connecting with database was successful")
    }
})
app.use(express.urlencoded({extended:true}));
const auth = require("./routes/auth.route");
app.use("/auth",auth);
app.listen(PORT,()=>{
    console.log(`app listening at port : ${PORT}`)
})