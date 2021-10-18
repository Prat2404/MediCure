import axios from 'axios';

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  axios
    .get('http://localhost:5000/profile')
    .then((res) =>
      dispatch({
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        payload: {},
      })
    );
};

// Create Profile
export const createProfile = (profileData, history) => (dispatch) => {
  console.log('here' + profileData);
  axios
    .post('http://localhost:5000/profile', profileData)
    .then((res) => history.push('/profile'))
    .catch((err) =>
      dispatch({
        payload: err.response.data,
      })
    );
};
