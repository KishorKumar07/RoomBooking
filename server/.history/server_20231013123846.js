const express=require('express')
const app=express()
const connection=require('./connection')
const OwnerRegModel=require('./models/')

app.listen(8080,()=>{
    console.log("Server connected")
})
