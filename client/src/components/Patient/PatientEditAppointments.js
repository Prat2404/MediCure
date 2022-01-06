import { Container } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import PreliminaryDiagnosis from './PreliminaryDiagnosis';
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
