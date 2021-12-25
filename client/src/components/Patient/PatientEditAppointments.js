import React from 'react';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import { useLocation } from 'react-router';
const PatientEditAppointments = (props) => {
  const location = useLocation();

  return <Container>{console.log(location.state.detail)}</Container>;
};

export default PatientEditAppointments;
