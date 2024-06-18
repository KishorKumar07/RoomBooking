const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')
const cors=require('cors')

const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const RoomDetailsModel = require('./models/RoomDetails')
app.use(express.json({limit:'10mb'})); 
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
        res.json({success:"Success"})
      }
    })
})

app.post('/owner/login/',(req,res)=>{
  const {email,password}=req.body
  
   OwnerRegModel.find({email}).then((result,err)=>{ 
     if(result[0].password==password)
     {
      res.json({successMsg:"success",username:result[0].username})
    
     }
    else
     {
      res.json({failMsg:"fail"})
    
     }
   })
})


app.post('/owner/create-room/',(req,res)=>{
  const { roomid,
    username,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    images}=req.body
  
   RoomDetailsModel.create({roomid,
    username,
    roomsize,
    numberofbeds,
    minimumbookingperiod,
    maximumbookingperiod,
    images}).then((result,err)=>{ 
    console.log('successfull')
   })
})

app.listen(8080,(port)=>{
    console.log("Server connected")
})


