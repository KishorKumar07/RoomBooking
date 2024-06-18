const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')


app.post('/owner/register',(req,res)=>{
    const values=req.body
    OwnerRegModel.create(values).then((result,err)=>{
        console.log(result)
    })
})

app.listen(8080,()=>{
    console.log("Server connected")
})


