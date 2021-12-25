const express = require('express');
const path = require('path');
const cors = require('cors');

const login = require('./routes/login');
const register = require('./routes/register');
const appoinment = require('./routes/appointment');
const profile = require('./routes/profile');
const dlogin = require('./routes/logindoctor');
const dregister = require('./routes/registerdoctor');
const dprofile = require('./routes/profiledoctor');
const doctorTimeSlot = require('./routes/doctorTimeSlot');
const appointmentAvailability = require('./routes/appointmentAvailability');
const app = express();

const PORT = process.env.PORT || 5000;

//Init middleware
app.use(express.json());
app.use(cors());
// DB Config
const db = require('./config/keys').mongoURI;

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('API running'));
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// Define routes
app.use('/login', login);
app.use('/register', register);

app.use('/profile', profile);
app.use('/doctor/login', dlogin);
app.use('/doctor/register', dregister);
app.use('/doctor/profile', dprofile);
app.use('/doctor/scheduleTimings', doctorTimeSlot);
app.use('/patient/find-appointment-availability', appointmentAvailability);
app.use('/patient/appointment', appoinment);
