import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
  listCard: {},
});
const PatientSearchDoctor = () => {
  const classes = useStyles();
  const history = useHistory();
  const [doctors, setDoctors] = useState([
    {
      doctorId: '1',
      name: 'Abhishek Keshri',
      degree: 'MDS - Periodontology and Oral Implantology, BDS ',
      specialization: 'Dentist',
      location: 'Florida USA',
    },
  ]);

  return (
    <div className='continer'>
      <Card>
        <CardHeader title='Filter'></CardHeader>
      </Card>
      <List>
        {doctors.map((doctor) => (
          <ListItem>
            <Card className={classes.listCard}>
              <CardHeader title={doctor.name}>
                <CardContent>
                  <div>{doctor.degree}</div>
                </CardContent>
              </CardHeader>
              <Button
                onClick={(e) => {
                  history.push({
                    pathname: '/patient/findAppointments',
                    state: doctor,
                  });
                }}
                variant='contained'
                color='secondary'
              >
                Book
              </Button>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PatientSearchDoctor;
