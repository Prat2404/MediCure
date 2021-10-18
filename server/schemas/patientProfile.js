const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'patient',
  },
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
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

module.exports = mongoose.model('patientProfile', UserSchema);
