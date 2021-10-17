import { Container, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';

import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router';
import Auth from '../../utils/Auth';
const useStyle = makeStyles({
  field:{
    marginTop: 20,
    marginBottom: 20,
    marginLeft:20,
    display: 'block'
    
  }
});
const PatientLogin = (props) => {
  const classes = useStyle();
  const [emailError, setEmailError] = useState(false);
  const [passwdError, setPasswdError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { email, password } = formData;

  const doLogin = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswdError(false);

    if(email=='')
    {
      setEmailError(true);
      return
    }
    if(password=='')
    {
      setPasswdError(true);

    }
    
    if(email&&password)
    {
      
      Auth.PatientLogin(email, password) ? props.history.push('/patient/home/'):(console.log('Login error'));
      
   }
  };

  return (
    <Container>
      <Typography className={classes.field}>
        Login Form
      </Typography>
      <form noValidate onSubmit={doLogin}>
        <TextField 
          label='Email'
         className={classes.field} 
         required 
         name='email'
         placeholder='Email'
         onChange={onChange}
         error={emailError}
          />
        <TextField 
        type='password' 
        className={classes.field} 
        label='Password' 
        name='password'
        error={passwdError}
        required
        onChange={onChange} />
        <Button 
        type='submit' 
        variant='contained'
        color='primary'
        > Login</Button>
      </form>
      
    </Container>
  );
};

export default PatientLogin;
