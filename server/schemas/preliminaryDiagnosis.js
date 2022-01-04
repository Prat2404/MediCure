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
      type: { type: String },
      text: { type: String },
      items: [
        {
          id: { type: String },
          name: { type: String },
          choices: [
            {
              id: { type: String },
              label: { type: String },
            },
          ],
        },
      ],
      extras: {},
    },
    conditions: [
      {
        id: { type: String },
        name: { type: String },
        common_name: { type: String },
        probability: Number,
      },
    ],
    extras: {},
    should_stop: { type: Boolean },
  },
  Triage: {
    triage_level: { type: String },
    serious: [
      {
        id: { type: String },
        name: { type: String },
        common_name: { type: String },
        is_emergency: { type: Boolean },
      },
    ],
    root_cause: { type: String },
    teleconsultation_applicable: { type: Boolean },
  },
  Explain: {
    supporting_evidence: [
      {
        id: { type: String },
        name: { type: String },
        common_name: { type: String },
      },
    ],
    conflicting_evidence: [
      {
        id: { type: String },
        name: { type: String },
        common_name: { type: String },
      },
    ],
    unconfirmed_evidence: [
      {
        id: { type: String },
        name: { type: String },
        common_name: { type: String },
      },
    ],
  },
});

module.exports = mongoose.model('preliminaryDiagnosis', PreliminaryDiagnosis);
