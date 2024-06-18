const mongoose = require('mongoose');



const OwnerRegSchema = new mongoose.Schema({

  roomid: {
    type: String,
    required: true,
  },
  roomsize: {
    type: Number,
    required: true,
  
  },
  numberofbeds: {
    type: Number,
    required: true,
  },
  minimumbookingperiod: {
    type: String,
    required: true,
  },
  maximumbookingperiod:{
    type:Number,
    required:true
  },
  images:{
    type:String,

  }

});


const OwnerRegModel = mongoose.model('ownerregmodel', OwnerRegSchema);

module.exports = OwnerRegModel;
