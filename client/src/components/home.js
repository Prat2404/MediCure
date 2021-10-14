import React, { Fragment } from 'react';
import Appointment from './layout/appointment';
import Navbar from './layout/navbar';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Appointment />
    </Fragment>
  );
};

export default Home;
