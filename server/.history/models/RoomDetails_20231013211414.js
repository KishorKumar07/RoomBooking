const mongoose = require('mongoose');

const RoomDetailsSchema = new mongoose.Schema({

  roomid: {
    type: String,
    required: true,
  },
  username:{
    type:String,
    required:true
  },
  roomname:{
    type:String,
    required:true
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
  rateperday:{
    type:Number,
    required:true
  },
  images:{
    type:Array,
    required:true
  }

});


const RoomDetailsModel = mongoose.model('roomdetailsmodel', RoomDetailsSchema);

module.exports = RoomDetailsModel;
