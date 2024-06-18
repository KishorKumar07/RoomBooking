const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')
const cors=require('cors')

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post('/owner/register/',(req,res)=>{
    const {username,email,number,password}=req.body
    console.log(username)
    // OwnerRegModel.create({username,email,number,password}).then((result,err)=>{
    //   if(err)
    //   {
    //     console.log(err)
    //   }
    //   else{
    //     console.log(result)
    //   }
    // })
})

app.listen(8080,(port)=>{
    console.log("Server connected")
})


