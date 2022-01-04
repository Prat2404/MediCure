const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');
const Appointment = require('../schemas/appointmentDetails');
const auth = require('../middleware/auth');
const Doctor = require('../schemas/doctor');
const DoctorProfile = require('../schemas/doctorProfile');

// @route  POST /login
// @desc   Test route
// @access Public
router.post('/book', auth, async (req, res) => {
  try {
    console.log(req.body);
    const patientId = req.user;
    const doctorId = req.body.doctorId;
    const date = req.body.date;
    const timeSlot = req.body.timeSlot;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const age = req.body.age;
    const sex = req.body.sex;
    const appointMode = timeSlot.status === '0' ? 0 : 1;

    const appointment = new Appointment({
      PatientId: patientId,
      DoctorId: doctorId,
      AppointmentDate: date,
      TimeSlot: timeSlot,
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      AppointmentMode: appointMode,
      Age: age,
      Sex: sex,
    });

    await appointment.save();
    console.log('Appointment Booked');
    res.send('Appointment Booked');
  } catch (error) {
    console.log(error);
    res.status(500).send('(Server) appointment insert error');
  }
});
router.get('/', auth, async (req, res) => {
  const patientId = req.user;
  const appointments = await Appointment.find({ PatientId: patientId });
  return res.json({ appointments: appointments });
});
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
// getTheAppointmetDetails
router.get('/getAppointDetails', auth, async (req, res) => {
  const patientId = req.user;
  // console.log(patientId);
  Appointment.find({ PatientId: patientId })
    .populate('DoctorId', ['Name'])
    .then((appointments) => {
      // console.log(appointments);
      res.json(appointments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errors: [{ msg: 'Server Request Error' }] });
    });
});
router.get('/getDoctorsList', auth, async (req, res) => {
  DoctorProfile.find()
    .populate('user', ['Name'])
    .then((doctors) => {
      // console.log(doctors);
      res.json(doctors);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errors: [{ msg: 'Server Request Error' }] });
    });
});
module.exports = router;
