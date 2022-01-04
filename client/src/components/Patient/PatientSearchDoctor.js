import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getDoctorsList } from '../../utils/patientActions';
const useStyles = makeStyles({
  listCard: {},
});
const PatientSearchDoctor = () => {
  const classes = useStyles();
  const history = useHistory();
  const [doctors, setDoctors] = useState([
    {
      Name: '',
      Address: '',
      Gender: '',
      City: '',
      Degree: '',
      Specialisation: '',
      State: '',
      PhoneNumber: '',
      user: {
        _id: new Object(),
        Name: '',
      },
      _id: new Object(''),
    },
  ]);
  useEffect(() => {
    getDoctorsList().then((res) => {
      console.log(res);
      setDoctors(res);
    });
  }, []);

  return (
    <div className='continer'>
      <Card>
        <CardHeader title='Filter'></CardHeader>
      </Card>
      <List>
        {doctors.map((doctor) => (
          <ListItem>
            <Card className={classes.listCard}>
              <CardHeader title={doctor.Name} />
              <CardContent>{doctor.Specialisation}</CardContent>
              <CardActions>
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
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PatientSearchDoctor;
