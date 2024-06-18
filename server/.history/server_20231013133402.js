const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')
const cors=require('cors')
app.use(cors)

app.post('/owner/register/',(req,res)=>{
    const values=req.body
    OwnerRegModel.create(values).then((result,err)=>{
      if(err)
      {
        console.log(err)
      }
      else{
        console.log(result)
      }
    })
})

app.listen(8080,()=>{
    console.log("Server connected")
})


