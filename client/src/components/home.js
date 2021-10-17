import React, { Fragment } from 'react';
import Navbar from './layout/navbar';
import DashboardNavbar from './Patient/DashboardNavbar';
const Home = () => {
  return (
    <Fragment>
      <DashboardNavbar />
      <div>This is Home</div>
    </Fragment>
  );
};

export default Home;
