const mongoose = require('mongoose');



const OwnerMainSchema = new mongoose.Schema({
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

// Create the model
const User = mongoose.model('User', OwnerMainSchema);

module.exports = User;
