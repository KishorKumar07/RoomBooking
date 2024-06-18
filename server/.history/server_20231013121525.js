const express=require('express')
const app=express()
const connection=require('./connection')

connection()

app.listen(8080,()=>{
    console.log("Server connected")
})
