import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../../utils/Auth';
import Navbar from './navbar';
const Landing = () => {
  console.log(Auth.loggedIn());
  if (Auth.loggedIn()) {
    if (Auth.isdoctor()) return <Redirect to='/doctor/home' />;
    else return <Redirect to='/patient/home' />;
  }
  return (
    <Fragment>
      <div className='Landing'>
        <Link to='/patient'>
          <button>Patient</button>
        </Link>
        <Link to='/doctor'>
          <button>Doctor</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
