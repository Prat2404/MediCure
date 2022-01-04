import React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { getAppointDetails } from '../../utils/patientActions';

const PatientAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      PatientId: '',
      DoctorId: {
        _id: new Object(),
        Name: '',
      },
      BookingDate: '',
      AppointmentDate: '',
      TimeSlot: {
        startTime: '',
        endTime: '',
        status: '',
        _id: '',
      },
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Recipt: '',
      AppointmentMode: 0,
      Symptoms: '',
      Age: '',
      Sex: '',
      _id: new Object(''),
    },
  ]);
  useEffect(() => {
    getAppointDetails().then((res) => {
      // console.log(res);
      setAppointments(res);
    });
  }, []);
  const history = useHistory();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Doctor</TableCell>
              <TableCell>App Date</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>AppointmentMode</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => {
              return (
                <TableRow>
                  <TableCell>{appointment.DoctorId.Name}</TableCell>
                  {/* <TableCell>Date format bug</TableCell>
                  <TableCell>Date format bug</TableCell> */}
                  <TableCell>
                    {appointment.AppointmentDate.substring(0, 10)}
                  </TableCell>
                  <TableCell>
                    {appointment.BookingDate.substring(0, 10)}
                  </TableCell>
                  <TableCell>
                    {appointment.FirstName + ' ' + appointment.LastName}
                  </TableCell>
                  {appointment.AppointmentMode == 0 && (
                    <TableCell>Online</TableCell>
                  )}
                  {appointment.AppointmentMode == 1 && (
                    <TableCell>Offline</TableCell>
                  )}
                  <TableCell align='center'>
                    <Button
                      onClick={(e) => {
                        history.push({
                          pathname: '/patient/appointments/view',
                          state: { detail: appointment },
                        });
                      }}
                    >
                      View
                    </Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PatientAppointments;
