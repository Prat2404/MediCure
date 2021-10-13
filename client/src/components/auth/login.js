import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import Auth from "../utils/Auth";
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
 //var handleAjaxResponse;
//  handleAjaxResponse = (data) => {
//   console.log(data);
// }
  const doLogin = async (e) => {
    e.preventDefault();
    var mess= Auth.login(
      email,
      password,
    );
    if (Auth.loggedIn()) {
      return <Redirect to={"/home"} />;
    }
  };
  console.log(Auth.loggedIn());
  if (Auth.loggedIn()) {
    return <Redirect to={"/home"} />;
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
