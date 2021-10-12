const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  PatientId: {
    type: String,
    required: true,
  },
  DoctorId: {
    type: String,
    required: true,
  },
  TimeSlot: {
    type: Date,
    required: true,
  },
  Recipt: {
    type: String,
    required: true,
  },
  AppoinmentMode: {
    type: String,
    required: true,
    //choice physical or online
  },
  Symptoms: {
    type: String,
    required: true,
  },
  PastHistoryOfMedical: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('appoinment', UserSchema);
