import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Auth from '../utils/Auth';
import Navbar from './navbar';
const Landing = () => {
  console.log(Auth.loggedIn());
  if (Auth.loggedIn()) {
    return <Redirect to='/home' />;
  }
  return (
    <Fragment>
      <Navbar />
      <div className='lading'>
        <Link to='/'>
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
