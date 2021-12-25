import React from 'react';
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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const PatientAppointments = () => {
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
              <TableCell>Amount</TableCell>
              <TableCell>Follow Up</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Abhishek</TableCell>
              <TableCell>10/07/2002</TableCell>
              <TableCell>10/07/2002</TableCell>
              <TableCell>10</TableCell>
              <TableCell>he</TableCell>
              <TableCell>nkad</TableCell>
              <TableCell align='center'>
                <Button
                  onClick={(e) => {
                    history.push({
                      pathname: '/patient/appointments/view',
                      state: { detail: 'hello' },
                    });
                  }}
                >
                  View
                </Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PatientAppointments;
