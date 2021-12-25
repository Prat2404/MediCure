import { Avatar, Drawer, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListAltIcon from '@mui/icons-material/ListAlt';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import Navbar from './PatientNavbar';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    pages: {
      background: '#f9f9f9',
      width: '100%',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: 12,
    },
    appbar: {
      width: `calc(100% - 240px)`,
    },
    toolbar: {
      marginBottom: '60px',
    },
  };
});
const PatientLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location.pathname);
  const menuItems = [
    {
      text: 'Profile',
      icon: <PersonOutlineIcon color='secondary' />,
      path: '/patient/profile',
    },
    {
      text: 'Home',
      icon: <HomeOutlinedIcon color='secondary' />,
      path: '/patient/home',
    },
    {
      text: 'Search Dotors',
      icon: <PersonSearchOutlinedIcon color='secondary' />,
      path: '/patient/searchDoctors',
    },
    {
      text: 'Appointments',
      icon: <ListAltIcon color='secondary' />,
      path: '/patient/appointments',
    },
  ];
  return (
    <div className={classes.root}>
      {/* navigation bar */}
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Navbar />
      </AppBar>
      {/* side bar */}
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant='permanent'
        anchor='left'
      >
        <Typography variant='h6' component='h2' className={classes.title}>
          Medicure
        </Typography>
        {/* List of Profile Details */}
        <Avatar
          sx={{ width: 56, height: 56 }}
          src='https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E'
        />
        {/* List Links */}
        <List>
          {/* @TODO classActive to list Item */}
          {menuItems.map((menuItem) => (
            <ListItem
              button
              key={menuItem.text}
              onClick={() => history.push(menuItem.path)}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
        {/* Doctor Appoint and other  */}
        <List>
          <ListItem button>
            <ListItemText primary='Find Doctors' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='Appointment' />
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.pages}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default PatientLayout;
