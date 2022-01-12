const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Diagnosis = mongoose.Schema({
  AppointmentId: {
    type: Schema.Types.ObjectId,
    ref: 'appoinment',
    required: true,
  },
  Diagnosis: [
    {
      Condition: { type: String },
      DoctorNote: { type: String },
      DoctorPrivateNote: { type: String },
      Prescription: { type: String },
      LabTest: [
        {
          name: { type: String },
          report: { type: String },
        },
      ],
      PrescriptionDate: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

module.exports = mongoose.model('diagnosis', Diagnosis);
