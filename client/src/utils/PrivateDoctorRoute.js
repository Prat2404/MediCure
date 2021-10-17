import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

const PrivateDoctorRoute = ({ component: Component, ...rest }) => {
  const check = () => {
    return Auth.loggedIn() && Auth.isdoctor();
  };
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        check() ? <Component {...props} /> : <Redirect to='/doctor/' />
      }
    />
  );
};
export default PrivateDoctorRoute;
