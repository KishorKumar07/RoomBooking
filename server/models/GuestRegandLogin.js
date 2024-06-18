const mongoose = require('mongoose');



const GuestRegandLoginSchema = new mongoose.Schema({

  guestname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  
  },
  number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const guestregmodel = mongoose.model('guestregmodel', GuestRegandLoginSchema);

module.exports = guestregmodel;
