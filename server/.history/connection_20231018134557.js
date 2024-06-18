const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDb Connected")
}).catch(()=>{
    console.log("Connection error")
})
module.exports=mongoose.connect;