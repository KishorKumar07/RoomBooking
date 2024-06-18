const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

mongoose.connect('mongodb+srv://nishanth:nishanth@cluster0.osxufd6.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDb Connected")
})

module.exports=mongoose.connect;