import { Container, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { makeStyles } from '@mui/styles';

import React, { useState, useEffect, Fragment } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Auth from '../../utils/Auth';
const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20,
    display: 'block',
    width: '100%',
  },
});
const DoctorRegister = (props) => {
  const classes = useStyle();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const history = useHistory();

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
          'http://localhost:5000/doctor/register',
          {
            Name: name,
            Email: email,
            Password: password1,
          },
          { headers }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          history.push('/doctor/home');
        })
        .catch((error) => {
          console.log('Error ========>', error.response.data);
        });
    }
  };

  return (
    <Container>
      <Typography className={classes.field}>Sign Up</Typography>
      <form onSubmit={doRegister}>
        <TextField
          type='text'
          name='name'
          placeholder='Name'
          className={classes.text}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          type='text'
          name='email'
          placeholder='Email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          type='password'
          name='password1'
          placeholder='Password'
          value={password1}
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        />
        <TextField
          type='password'
          name='password2'
          placeholder='Renter Password'
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
        <Button type='submit' variant='outlined'>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default DoctorRegister;
