const mongoose=require('mongoose')


mongoose.connect('mongodb+srv://nishanth:<password>@cluster0.osxufd6.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("MongoDb Connected")
})