const mongoose = require('mongoose');
const Schema = mongoose.Schema
const UserSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'doctor'
  },
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
});
//Pincode
//City
//State
//Phone Number
//Specialisation
//Degree
//

module.exports = mongoose.model('doctorProfile', UserSchema);
