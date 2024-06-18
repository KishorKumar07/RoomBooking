const mongoose = require('mongoose');



const BookingSchema = new mongoose.Schema({
    guestname: {
    type: String,
    required: true,
  },
  ownername: {
    type: String,
    required: true,
  },
  roomid: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  bookingdates:{
    startdate:{
        type:Date,
        required:true,
    },
    enddate:{
        type:Date,
        required:true
    }
  }
});


const BookingModel = mongoose.model('guestregmodel', BookingSchema);

module.exports = BookingModel;
