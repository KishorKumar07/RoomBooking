const mongoose = require('mongoose');



const OwnerRegSchema = new mongoose.Schema({
//   ownerId: {
//     type: String, // or mongoose.Schema.Types.ObjectId if you want to use MongoDB ObjectID
//     required: true,
    
//   },
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


const OwnerRegModel = mongoose.model('ownerregmodel', OwnerRegSchema);

module.exports = OwnerRegModel;
