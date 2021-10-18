import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import defaultValues from './Default/defaultValues';
const getDoctorId = () => {
  const token = localStorage.getItem('token');
  const decode = jwt_decode(token);
  return decode.user.id;
};
const variant = ['success', 'primary', 'secondary'];
const DoctorScheduleTiming = () => {
  const [days, setDays] = useState([
    {
      dayId: '',
      text: '',
      slots: [
        {
          startTime: '',
          endTime: '',
          status: '', //1(Online)0(offline)2(Unavilable)
        },
      ],
    },
  ]);
  const [doctorId, setDoctorId] = useState('');
  useEffect(() => {
    setDoctorId(getDoctorId());
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post(
        'http://localhost:5000/doctor/scheduleTimings',
        {
          DoctorId: getDoctorId(),
          Days: defaultValues.days,
        },
        { headers }
      )
      .then((res) => {
        setDays(res.data.Days);
      })
      .catch((error) => {
        console.log('Error ========>', error.response.data);
      });
  }, []);
  const [selectedTab, setselectedTab] = useState(0);
  const handleOnchange = (e, newValue) => {
    setselectedTab(newValue);
  };
  return (
    <div>
      <Card>
        <CardHeader title='Schedule Timings'></CardHeader>
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={handleOnchange}>
              {days.map((day) => (
                <Tab label={day.text} />
              ))}
            </Tabs>
            <ButtonGroup>
              {days[selectedTab].slots.map((slot) => (
                <Button
                  variant='contained'
                  color={variant[slot.status]}
                  onClick={console.log('Button Clicked')}
                >
                  {slot.startTime}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorScheduleTiming;
