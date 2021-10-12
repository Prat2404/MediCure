const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true
  },
  PatientHistory: {
    type: String,
    required: true,
  },
  // for presciptions object need to be created 

});

module.exports = mongoose.model('patientProfile', UserSchema);
