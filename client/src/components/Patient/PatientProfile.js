import { Container, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React, { useState, useEffect, Fragment, Component } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Auth from '../../utils/Auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfile } from '../../utils/profileactions';
const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 20,
    display: 'block',
    width: '100%',
  },
});
const PatientProfile = (props) => {
  const classes = useStyle();
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [Address, setAddress] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [Pincode, SetPinCode] = useState('');
  const [Blood, setBlood] = useState('');
  const [Mobile, setMobile] = useState('');
  const [DOB, setDOB] = useState('');

  const history = useHistory();
  const updateProfile = async (e) => {
    e.preventDefault();
    const profileData = {
      first_name,
      last_name,
      City,
      State,
      DOB,
      Address,
      Blood,
      Mobile,
    };
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
  return (
    <Container>
      <Typography className={classes.field}>Sign Up</Typography>
      <form onSubmit={updateProfile}>
        <div>
          <div class='container'>
            <div class='row gutters'>
              <div class='col-md-12 col-lg-12 col-xl-12'>
                <div class='card'>
                  <div class='card-body'>
                    <form onSubmit={updateProfile}>
                      <div class='row form-row'>
                        <div class='col-12 col-md-12'>
                          <div class='form-group'>
                            <div class='change-avatar'>
                              <div class='profile-img'>
                                <img src='...jpg' alt='User' />
                              </div>
                              <div class='upload-img'>
                                <div class='change-photo-btn'>
                                  <span>
                                    <i class='fa fa-upload'></i> Upload Photo
                                  </span>
                                  <input type='file' class='upload' />
                                </div>
                                <small class='form-text'>
                                  Allowed JPG, GIF or PNG. Max size of 2MB
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              name='first_name'
                              placeholder='first_name'
                              class='form-control'
                              onChange={(e) => {
                                setfirst_name(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              name='last_name'
                              placeholder='last_name'
                              class='form-control'
                              onChange={(e) => {
                                setlast_name(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <div class='cal-icon'>
                              <input
                                type='date'
                                class='form-control datetimepicker'
                                name='DOB'
                                placeholder='DOB'
                                onChange={(e) => {
                                  setDOB(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control '
                              name='Mobile'
                              placeholder='Mobile'
                              onChange={(e) => {
                                setMobile(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div class='col-12'>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control '
                              name='Address'
                              placeholder='Address'
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control '
                              name='City'
                              placeholder='City'
                              onChange={(e) => {
                                setCity(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control '
                              name='State'
                              placeholder='State'
                              onChange={(e) => {
                                setState(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div class='col-12 col-md-6'>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control '
                              name='PinCode'
                              placeholder='PinCode'
                              onChange={(e) => {
                                SetPinCode(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button type='submit' variant='contained' color='primary'>
          {' '}
          Update
        </Button>
      </form>
    </Container>
  );
};

export default PatientProfile;
