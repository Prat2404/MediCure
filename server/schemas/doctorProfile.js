const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'doctor',
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Pincode: {
    type: String,
    required: true,
  },
  City:{
  type: String,
  required: true,
  },
  State:{
   type: String,
   required: true,
  },
  PhoneNumber:{
    type: String,
    required: true,
  },
  Specialisation:{
    type: String,
    required: true,
  },
  Degree:{
    type: String,
    required: true,
  },
});


module.exports = mongoose.model('doctorProfile', UserSchema);
