import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import PreliminaryDiagnosis from './PreliminaryDiagnosis';
import axios from 'axios';
const PatientEditAppointments = (props) => {
  const location = useLocation();
  const appointment = location.state.detail;
  const [preliminary, setPreliminary] = useState(false);
  useEffect(() => {
    // getPremil
    console.log(appointment);
  }, []);
  return (
    <Fragment>
      <Fragment>
        <Container></Container>
      </Fragment>
      {!preliminary && <PreliminaryDiagnosis appointment={appointment} />}
      {preliminary && <h1> Preliminary Diagnosis Submitted</h1>}
    </Fragment>
  );
};

export default PatientEditAppointments;
