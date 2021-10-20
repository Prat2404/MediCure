const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
// Load Profile Model
const Profile = require('../schemas/doctorProfile');
// Load User Model
const User = require('../schemas/doctor');


// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  auth,
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate('user', ['name', 'email'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile/Email/:email
// @desc    Get profile by email
// @access  Public

router.get('/Email/:email', (req, res) => {
  const errors = {};

  Profile.findOne({ Email: req.params.email })
    .populate('user', ['name'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});


// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  
  auth,
  (req, res) => {

    // Check Validation
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    // Get fields
    const profileFields = {};
    profileFields.user = req.user;
    if (req.body.address) profileFields.Address = req.body.Address;
    if (req.body.gender) profileFields.Gender = req.body.Gender;
    if (req.body.specialisation) profileFields.Specialisation = req.body.Specialisation;
    if (req.body.city) profileFields.City = req.body.City;
    if (req.body.state) profileFields.State = req.body.State;
    if (req.body.phonenumber) profileFields.PhoneNumber = req.body.PhoneNumber;
    if (req.body.pincode) profileFields.Pincode = req.body.Pincode;
    if(req.body.degree) profileFields.Degree = req.body.Degree;
    // Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create
          // Save Profile
          Profile.findOne({  user: req.user.id }).then(profile => {
            // Save Profile
            new Profile(profileFields).save().then(profile => res.json(profile));
          });
      }
      });
  }
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  auth,
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
