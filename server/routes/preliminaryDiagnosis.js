const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
// Load Profile Model
const Profile = require('../schemas/doctorProfile');
// Load User Model
const User = require('../schemas/doctor');
const preliminaryDiagnosis = require('../schemas/preliminaryDiagnosis');
// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', auth, (req, res) => {
  const data = {};
  if (req.body.AppointmentId) {
    data.AppointmentId = req.body.AppointmentId;
  }
  var objectId = mongoose.Types.ObjectId(data.AppointmentId);
  //  console.log(req.body);
  preliminaryDiagnosis.findOne(
    { AppointmentId: objectId },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        if (data) {
          // console.log('data found');
          res.json({ message: 'data found', data: data });
        } else {
          //   console.log('no data');
          res.json({ message: 'no data' });
        }
      }
    }
  );
});

module.exports = router;
