const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

  DoctorId: {
    type: String,
    required: true,
  },
  Date: {
      type: String,
      required:true,
  },
  Notes: {
  type: String,
  required: true,
  },
});

module.exports = mongoose.model('patientHiddenNotes', UserSchema);
