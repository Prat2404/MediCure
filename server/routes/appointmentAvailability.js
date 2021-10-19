const express = require('express');
const AppointmentDetails = require('../schemas/appointmentDetails');
const router = express.Router();
const TimeSlot = require('../schemas/TimeSlot');
const auth = require('../middleware/auth');
router.post('/', auth, async (req, res) => {
  console.log(req.body);
  const d = req.body.date;
  const from = d.split('-');
  const date = new Date(from[2], from[1] - 1, from[0]);
  const docId = req.body.DoctorId;
  const day = date.getDay();

  let timeSlot = await TimeSlot.findOne({ DoctorId: docId });
  if (timeSlot) {
    console.log(day);
    const slotTemp = timeSlot.Days;

    const slots = slotTemp[day].slots;
    // console.log(slots);
    let bookedSlots = await AppointmentDetails.find({
      DoctorId: docId,
      AppointmentDate: date,
    });
    for (let index = 0; index < bookedSlots.length; index++) {
      const i = slots.indexOf(bookedSlots[index].TimeSlot);
      if (i > -1) {
        slots.status = '2';
      }
    }
    return res.json(slots);
  } else {
    return res.status(400).json({ errors: [{ msg: 'No such doctor found' }] });
  }
  // get the time slot of doctor
});
module.exports = router;
