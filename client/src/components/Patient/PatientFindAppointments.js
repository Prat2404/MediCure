import {
  CardHeader,
  Container,
  Card,
  Box,
  TextField,
  Button,
  ButtonGroup,
  Typography,
  
} from '@mui/material';
import React, { useState,useEffect } from 'react';
import { getAppointments } from '../../utils/profileactions';

const PatientFindAppointments = (props) => {
  const [date, setDate] = useState('');
  const [buttonDis,setbuttondis] = useState(false);
  useEffect(() => {
    
  }, []);
  const [timeSlots, setTimeSlots] = useState([
    {
      startTime: '',
      endTime: '',
      status: '',
      _id: '',
    },
  ]);
  const { doctorId, name, degree, specialization, location } =
    (props.location && props.location.state) || {};

  return (
    <div className='conatiner'>
      <Container>
        <Card>
          <CardHeader title={name} subheader={specialization} />
        </Card>
      </Container>

      <div className='appointment'>
        <Container>
          <Box
            component='form'
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='date'
              label='Appointment Date'
              type='date'
              defaultValue={date}
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => {
                setDate(e.target.value);
                console.log(date);
              }}
            />
            <Button
              onClick={(e) => {
                getAppointments(doctorId, date).then((data) =>
                  setTimeSlots(data)
                );
                console.log(timeSlots)
              }}
              variant='contained'
            >
              Find Appointments
            </Button>
          </Box>
        </Container>
        <Container>
          <Typography variant='h6' component='h2' >
           {date} 
          </Typography>
          <ButtonGroup>
              {timeSlots.map((timeSlot)=>{
                
                return(
                  <Button 
                  variant='contained'
                  color={timeSlot.status=='2'?'error':timeSlot.status=='0'?'success':'primary'} 
                  disabled={timeSlot.status=='2'?true:false}>
                    {timeSlot.startTime+' - '+timeSlot.endTime}
                  </Button>
                );
              })}
          </ButtonGroup>
        </Container>
      </div>
    </div>
  );
};

export default PatientFindAppointments;
