const express = require('express');
const path = require('path');
const cors = require('cors');
const upload_file = require('./routes/file_upload.js');
const fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var mul = multer();
const login = require('./routes/login');
const register = require('./routes/register');
const appoinment = require('./routes/appointment');
const profile = require('./routes/profile');
const dlogin = require('./routes/logindoctor');
const dregister = require('./routes/registerdoctor');
const dprofile = require('./routes/profiledoctor');
const doctorTimeSlot = require('./routes/doctorTimeSlot');
const DoctorAppointments = require('./routes/DoctorAppointments');
const appointmentAvailability = require('./routes/appointmentAvailability');
const prescription = require('./routes/prescriptions');
const reports = require('./routes/reports');
const filedown = require('./routes/file_download');
const auth = require('./middleware/auth');
const prediagnosis = require('./routes/preliminaryDiagnosis');
const userdetails = require('./routes/userdetails');
const daignosis = require('./routes/diagnosis');
//const filelist = require('./routes/file_list');
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
// File POST handler.
app.post('/file_upload', auth, function (req, res) {
  upload_file(req, function (err, data) {
    if (err) {
      return res.status(404).end(JSON.stringify(err));
    }

    res.send(data);
  });
});

// Create folder for uploading files.
var filesDir = path.join(path.dirname(require.main.filename), 'uploads');
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}
app.use('/uploads/:name', filedown.download);
app.use('/uploads', filedown.getListFiles);
// Define routes
app.use('/login', login);
app.use('/register', register);
app.use('/patient/prescription', prescription);
app.use('/patient/reports', reports);
app.use('/patient/find-appointment-availability', appointmentAvailability);
app.use('/patient/appointment', appoinment);
app.use('/patient/checkpreliminaryDiagnosis', prediagnosis);
app.use('/patient/user', userdetails);
app.use('/profile', profile);
app.use('/doctor/login', dlogin);
app.use('/doctor/register', dregister);
app.use('/doctor/profile', dprofile);
app.use('/doctor/getAppointments', DoctorAppointments);
app.use('/doctor/scheduleTimings', doctorTimeSlot);
app.use('/patient/find-appointment-availability', appointmentAvailability);
app.use('/patient/appointment', appoinment);
app.use('/patient/preliminaryDaignosis', prediagnosis);
app.use('/doctor/diagnosis/', daignosis);
