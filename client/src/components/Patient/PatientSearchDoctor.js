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
const useStyles = makeStyles({
  listCard: {},
});
const PatientSearchDoctor = () => {
  const classes = useStyles();
  const [doctors, setDoctors] = useState([
    {
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
          <ListItem
            secondaryAction={
              <Button variant='contained' color='secondary'>
                Book
              </Button>
            }
          >
            <Card className={classes.listCard}>
              <CardHeader title={doctor.name}>
                <CardContent>
                  <div>{doctor.degree}</div>
                </CardContent>
              </CardHeader>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PatientSearchDoctor;
