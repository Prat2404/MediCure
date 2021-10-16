import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth';

const PrivatePatientRoute = ({ component: Component, ...rest }) => {
  const [state, setstate] = useState(false);
  useEffect(() => {
    if (Auth.loggedIn()) {
      if (Auth.isdoctor()) {
        setstate(false);
      } else {
        setstate(true);
      }
    } else {
      setstate(false);
    }
    // console.log(state);
  }, []);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        state ? <Component {...props} /> : <Redirect to='/patient/' />
      }
    />
  );
};
export default PrivatePatientRoute;
