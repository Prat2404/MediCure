import React, { useState, Fragment } from 'react';
import axios from 'axios';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(name,email,password1,password2);
  };
  const { name, email, password1, password2 } = formData;

  const doRegister = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      console.log('Password doesnot match');
    } else {
      const headers = {
        'Content-Type': 'application/json',
      };

      axios
        .post(
          'http://localhost:5000/register',
          {
            Name: name,
            Email: email,
            Password: password1,
          },
          { headers }
        )
        .then((res) => console.log(res))
        .catch((error) => {
          console.log('Error ========>', error);
        });
    }
  };

  return (
    <Fragment>
      <form className='form-horizontal' onSubmit={doRegister}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
        <input
          type='password'
          name='password1'
          placeholder='Password'
          value={password1}
          onChange={onChange}
        />
        <input
          type='password'
          name='password2'
          placeholder='Renter Password'
          value={password2}
          onChange={onChange}
        />
        <button type='submit' className='register-button'>
          Register
        </button>
      </form>
    </Fragment>
  );
}

export default Register;
