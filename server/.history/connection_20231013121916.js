import { connect } from 'mongoose';


connect('mongodb+srv://nishanth:nishanth@cluster0.osxufd6.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
}).then(()=>{
    console.log("MongoDb Connected")
})

export defaultconnect;