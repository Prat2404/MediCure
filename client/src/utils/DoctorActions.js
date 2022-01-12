import axios from 'axios';

export const getAppointDetails = async () => {
  console.log('Hello');
  return axios
    .get('http://localhost:5000/doctor/getAppointments', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
export const getDiagnosis = (appointmentId) => {
  console.log(appointmentId);
  return axios
    .post(
      'http://localhost:5000/doctor/diagnosis/fetch',
      {
        AppointmentId: appointmentId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
