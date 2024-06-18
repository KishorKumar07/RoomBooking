const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')
const cors=require('cors')

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
app.use(express.json()); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.post('/owner/register/',(req,res)=>{
   const {username,email,number,password}=req.body
   
    OwnerRegModel.create({username,email,number,password}).then((result,err)=>{
      if(err)
      {
        console.log(err)
      }
      else{
        console.log(result)
      }
    })
})

app.post('/owner/login/',(req,res)=>{
  const {email,password}=req.body
  
   OwnerRegModel.find({email}).then((result,err)=>{
     if(err)
     {
       res.json({message:"Failed"})
     }
     else{
      if(result[0].password==password)
      {
        console.log("Success")
      
       res.json({message:"Success"})
      }
     }
   })
})

app.listen(8080,(port)=>{
    console.log("Server connected")
})

