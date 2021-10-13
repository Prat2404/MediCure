const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Patient = require('../schemas/patient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys').jwtSecret;
// @route  POST /register
// @desc   Test route
// @access Public
router.post(
  '/',
  [
    check('Name', 'Name is required').not().isEmpty(),
    check('Email', 'Please enter valid email').isEmail(),
    check('Password', 'Please enter a valid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const name = req.body.Name;
      const email = req.body.Email;
      const password = req.body.Password;
      // check whether this patient already exist
      let patient = await Patient.findOne({ Email: email });
      if (patient) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'user already exists' }] });
      }
      // Create new patient object
      patient = new Patient({
        Name: name,
        Email: email,
        Password: password,
      });
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      patient.Password = await bcrypt.hash(password, salt);

      await patient.save();

      // Return web token

      const payload = {
        patient: {
          id: patient.id,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token });
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('(Server) User registration  error');
    }
  }
);
module.exports = router;
