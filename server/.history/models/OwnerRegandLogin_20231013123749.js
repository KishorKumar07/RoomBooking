const mongoose = require('mongoose');



const OwnerRegSchema = new mongoose.Schema({
//   ownerId: {
//     type: String, // or mongoose.Schema.Types.ObjectId if you want to use MongoDB ObjectID
//     required: true,
    
//   },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


const OwnerRegModel = mongoose.model('User', OwnerRegSchema);

module.exports = OwnerRegModel;
