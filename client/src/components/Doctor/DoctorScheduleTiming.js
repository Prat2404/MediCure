import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

const days = [
  {
    text: 'Monday',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'TuesDay',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'WednesDay',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'Thursday',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'Friday',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'Saturday',
    slot: [
      {
        time: '12-12:15',
        mode: 'offline',
      },
    ],
  },
  {
    text: 'Sunday',
    slot: [],
  },
];
const DoctorScheduleTiming = () => {
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
            <List>
              {days[selectedTab].slot.map((slot) => (
                <ListItem
                  secondaryAction={
                    <IconButton edge='end' aria-label='delete'>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={slot.time} secondary={slot.mode} />
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorScheduleTiming;
