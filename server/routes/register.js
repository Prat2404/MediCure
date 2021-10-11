const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Patient = require('../schemas/patient');
const bcrypt = require('bcryptjs');
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const name = req.body.Name;
      const email = req.body.Email;
      const password = req.body.Password;
      let patient = await Patient.findOne({ Email: email });
      if (patient) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'user already exists' }] });
      }
      patient = new Patient({
        Name: name,
        Email: email,
        Password: password,
      });
      const salt = await bcrypt.genSalt(10);
      patient.password = await bcrypt.hash(password, salt);
      await patient.save();
      res.send('User registration successful');
    } catch (error) {
      console.log(error.message);
      return res.status(500).send('(Server) User registration  error');
    }
  }
);
module.exports = router;
