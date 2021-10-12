const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Notes: {
    DoctorId: [
      {
        PatientId: [
          {
            Timings: {
              type: Date,
              required: true,
            },
            ImportantNote: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
});

module.exports = mongoose.model('patientHiddenNotes', UserSchema);
