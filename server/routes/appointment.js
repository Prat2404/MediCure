const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Appointment = require('../schemas/appointmentDetails');
// @route  POST /login
// @desc   Test route
// @access Public
router.post(
  '/book',
  [
    check('PatientId', 'Patient required').not().isEmpty(),
    check('DoctorId', 'Doctor required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const patienId = req.body.PatientId;
      const doctorId = req.body.DoctorId;
      const appointMode = req.body.AppoinmentMode;
      const symptoms = req.body.Symptoms;
      console.log(patienId, doctorId, appointMode, symptoms);
      const appointment = new Appointment({
        PatientId: patienId,
        DoctorId: doctorId,
        AppoinmentMode: appointMode,
        Symptoms: symptoms,
      });

      await appointment.save();
      res.send('Appointment Booked');
    } catch (error) {
      res.status(500).send('(Server) appointment insert error');
    }
  }
);
router.post(
  '/fetch',
  [
    check('Type', 'Type Recuired').not().isEmpty(),
    check('Id', 'Id Recuired').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const type = req.body.Type;
    if (type === 'doctor') {
      const doctorId = req.body.Id;
      const appointments = await Appointment.find({ DoctorId: doctorId });
      return res.json({ appointments: appointments });
    } else {
      const patientId = req.body.Id;
      const appointments = await Appointment.find({ PatientId: patientId });
      return res.json({ appointments: appointments });
    }
  }
);
router.post(
  '/update',
  [check('Id', 'Id Recuired').not().isEmpty()],
  async (req, res) => {
    const Id = req.body.Id;
    const filter = { _id: Id };
    const query = req.body;

    delete query.Id;

    const update = {
      query,
    };
    console.log(query, filter, update);
    try {
      let result = await Appointment.findOneAndUpdate(filter, query, {
        new: true,
      });
      console.log(result);
      return res.send('Appointment update successful');
    } catch (error) {
      console.log(error);
      return res.status(500).send('(Server) Appointment update error');
    }
  }
);
router.post(
  '/delete',
  [check('Id', 'Id Recuired').not().isEmpty()],
  async (req, res) => {
    const Id = req.body.Id;
    const filter = { _id: Id };

    // console.log(query, filter, update);
    try {
      let result = await Appointment.findOneAndDelete(filter);
      // console.log(result);
      return res.send('Appointment delete successful');
    } catch (error) {
      console.log(error);
      return res.status(500).send('(Server) Appointment update error');
    }
  }
);

module.exports = router;
