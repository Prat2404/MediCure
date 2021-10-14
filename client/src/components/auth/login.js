import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Auth from '../utils/Auth';
import { useHistory } from 'react-router';
import Home from '../home';
import Navbar from '../layout/navbar';
const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log(Auth.loggedIn());
  if (Auth.loggedIn()) {
    props.history.push('home');
  }
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { email, password } = formData;

  const doLogin = async (e) => {
    e.preventDefault();
    const mess = Auth.login(email, password);
    if (mess) {
      props.history.push('/home');
    }
  };

  return (
    <Fragment>
      <Navbar />
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
