const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Address: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  PatientHistory: [
    {
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
    },
  ],
});

module.exports = mongoose.model('patientProfile', UserSchema);
