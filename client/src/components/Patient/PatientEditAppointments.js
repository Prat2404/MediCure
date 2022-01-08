import { Container, Box, TextField } from '@mui/material';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import DisplayPreliminaryDiagnoisis from './DisplayPreliminaryDiagnoisis';
import PreliminaryDiagnosis from './PreliminaryDiagnosis';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  textField: {
    'padding-top': '10px',
    'padding-left': '10px',
    'padding-right': '10px',
    'padding-bottom': '10px',
  },
});
const PatientEditAppointments = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const appointment = location.state.detail;
  const [preliminary, setPreliminary] = useState(false);
  const [preliminaryDaignosis, setPreliminaryDiagnosis] = useState({ id: '' });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // getPremil
    axios
      .post(
        'http://localhost:5000/patient/preliminaryDaignosis/check',
        {
          AppointmentId: appointment._id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setPreliminaryDiagnosis(res.data);
        setPreliminary(true);
        setOpen(true);
      })
      .catch((err) => {
        setOpen(true);
        setPreliminary(false);
      });
    console.log(appointment);
  }, []);
  return (
    <Fragment>
      <Fragment>
        <Box
          component='div'
          sx={{
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'padding-top': '40px',
            // 'padding-bottom': '10px',
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='standard-read-only-input'
            label='Patient Name'
            value={appointment.FirstName + ' ' + appointment.LastName}
            InputProps={{
              readOnly: true,
            }}
            className={classes.textField}
          />
          <TextField
            id='standard-read-only-input'
            label='Email'
            // value={}
            InputProps={{
              readOnly: true,
            }}
            className={classes.textField}
          />
        </Box>
      </Fragment>
      {!open && (
        <img src={process.env.PUBLIC_URL + '/static/images/loading.gif'} />
      )}
      {open && !preliminary && (
        <PreliminaryDiagnosis appointment={appointment} />
      )}
      {open && preliminary && (
        <DisplayPreliminaryDiagnoisis
          preliminaryDaignosis={preliminaryDaignosis}
        />
      )}
    </Fragment>
  );
};

export default PatientEditAppointments;
