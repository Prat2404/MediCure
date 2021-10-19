import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography, Button } from '@mui/material';
const BookAppointment = (props) => {
  const { doctorId, name, degree, specialization, location } = props || {};
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
      }}
      noValidate
      autoComplete='off'
    >
      <Box
        component='div'
        sx={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-read-only-input'
          label='Doctor Name'
          value={name}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id='standard-read-only-input'
          label='Specialization'
          value={specialization}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Box
        sx={{
          'justify-content': 'center',
        }}
      >
        <Typography
          sx={{
            display: 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
          }}
          variant='h6'
          component='h2'
        >
          Patient Details
        </Typography>
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField label='First Name' required name='firstName' />
        <TextField label='Last Name' required name='lastName' />
      </Box>
      <Box
        component='div'
        sx={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
        noValidate
        autoComplete='off'
      >
        <TextField label='Email' required name='email' placeholder='Email' />
        <TextField label='Phone Number' required name='phone' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
        }}
      >
        <Button variant='contained'>Book</Button>
      </Box>
    </Box>
  );
};

export default BookAppointment;
