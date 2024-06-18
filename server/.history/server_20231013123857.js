const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/OwnerRegandLogin')

app.listen(8080,()=>{
    console.log("Server connected")
})
