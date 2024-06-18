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
    type: String,
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
  },
  amount:{
    type:Number,
  }
});


const BookingModel = mongoose.model('bookingschema', BookingSchema);

module.exports = BookingModel;
