const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'patient',
    required: true,
  },
  First_Name: {
    type: String,
  },
  Last_Name: {
    type: String,
  },
  Phone: {
    type: String,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Pincode: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Prescription: [
    {
      Timings: {
        type: Date,
        required: true,
      },
      MedicineDetails: {
        type: String,
        required: true,
      },
    },
  ],
  LabReport: [
    {
      Timings: {
        type: Date,
        required: true,
      },
      LabResult: {
        type: String,
        required: true,
      },
    },
  ],
});
//Pincode
//City
//State
//Phone Number
//Specialisation
//Degree
module.exports = mongoose.model('patientProfile', UserSchema);
