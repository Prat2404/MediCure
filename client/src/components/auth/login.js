import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(name,email,password1,password2);
  };
  const { email, password } = formData;

  const doLogin = async (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(
        'http://localhost:5000/login',
        {
          Email: email,
          Password: password,
        },
        { headers }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
      })
      .catch((error) => {
        console.log('Error ========>', error.response.data);
      });
  };
  if (localStorage.token) {
    return <Redirect to='/home' />;
  }
  return (
    <Fragment>
      <form className='form-horizontal' onSubmit={doLogin}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onChange}
        />
        <button type='submit' className='login-button'>
          Login
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
