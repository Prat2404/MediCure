import axios from 'axios';

// Get current profile
export const getCurrentProfile = () => {
  return axios
    .get('http://localhost:5000/profile', {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then(
      (res) => {
        return res.data;
      }
      // dispatch({
      //   payload: res.data,
      // })
    );
};

// Create Profile
export const createProfile = (profileData, history) => {
  console.log(profileData);
  axios
    .post('http://localhost:5000/profile', profileData, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      },
    })
    .then((res) => history.push('/patient/profile'))
    .catch((err) => console.log(err));
};

export const getAppointments = (doctorId, date) => {
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
      return res.data;
    })
    .catch((err) => console.log(err.msg));
  // return timeSlots;
};
