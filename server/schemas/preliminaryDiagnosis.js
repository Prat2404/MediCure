const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreliminaryDiagnosis = mongoose.Schema({
  AppointmentId: {
    type: Schema.Types.ObjectId,
    ref: 'appoinment',
    required: true,
  },
  Diagnosis: {
    question: {
      type: {
        type: String,
      },
      text: String,
      items: [
        {
          id: String,
          name: String,
          choices: [
            {
              id: String,
              label: String,
            },
          ],
        },
      ],
      extras: {},
    },
    conditions: [
      {
        id: String,
        name: String,
        common_name: String,
        probability: Number,
      },
    ],
    extras: {},
    should_stop: true,
  },
  Triage: {
    triage_level: emergency_ambulance,
    serious: [
      {
        id: String,
        name: String,
        common_name: String,
        is_emergency: true,
      },
    ],
    root_cause: String,
    teleconsultation_applicable: true,
  },
  Explain: {
    supporting_evidence: [
      {
        id: String,
        name: String,
        common_name: String,
      },
    ],
    conflicting_evidence: [
      {
        id: String,
        name: String,
        common_name: String,
      },
    ],
    unconfirmed_evidence: [
      {
        id: String,
        name: String,
        common_name: String,
      },
    ],
  },
});

module.exports = mongoose.model('preliminaryDiagnosis', PreliminaryDiagnosis);
