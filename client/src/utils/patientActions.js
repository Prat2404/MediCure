import axios from 'axios';
import React from 'react';
export const bookAppoinment = async (appointmentData, history) => {
  //   console.log(appointmentData);
  return axios
    .post('http://localhost:5000/patient/appointment/book', appointmentData, {
      headers: {
        'Content-type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then((res) => history.push('/patient/appointments/'))
    .catch((err) => {
      return err.msg;
    });
};
export const getAppointments = async (doctorId, date) => {
  console.log(date);

  return axios
    .post(
      'http://localhost:5000/patient/find-appointment-availability',
      {
        DoctorId: doctorId,
        date: date,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err.msg));
  // return timeSlots;
};
export const getAppointDetails = async () => {
  console.log('Hello');
  return axios
    .get('http://localhost:5000/patient/appointment/getAppointDetails', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
export const getDoctorsList = async () => {
  console.log('Hello');
  return axios
    .get('http://localhost:5000/patient/appointment/getDoctorsList', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
