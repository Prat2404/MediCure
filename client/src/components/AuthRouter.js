import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './auth/login';
import Register from './auth/register';
import Home from './home';
import Logout from '../utils/logout';
import Landing from './layout/landing';
import Chat from './chat/chat';

import PatientLogin from './Patient/PatientLogin';
import PatientRegister from './Patient/PatientRegister';
import PatientHome from './Patient/PatientHome';
import PatientLanding from './Patient/PatientLanding';

import DoctorRegister from './auth/doctorRegister';
import DoctorLogin from './Doctor/DoctorLogin';
import DoctorHome from './Doctor/DoctorHome';
import DoctorLanding from './Doctor/DoctorLanding';

import PrivateRoute from '../utils/PrivateRoute';
import PrivatePatientRoute from '../utils/PrivatePatientRoute';
import PrivateDoctorRoute from '../utils/PrivateDoctorRoute';

const AuthRouter = () => {
  return (
    <Fragment>
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/chat' component={Chat} />
        {/* patient routes */}
        <Route exact path='/patient/' component={PatientLanding} />
        <Route exact path='/patient/login' component={PatientLogin} />
        <Route exact path={'/patient/register'} component={PatientRegister} />
        <PrivatePatientRoute
          exact
          path='/patient/home'
          component={PatientHome}
        />
        {/* //doctor routes */}
        <Route exact path='/doctor/' component={DoctorLanding} />
        <Route exact path='/doctor/register' component={DoctorRegister} />
        <Route exact path='doctor/login' component={DoctorLogin} />
        <PrivateDoctorRoute exact path='/doctor/home' component={DoctorHome} />
      </Switch>
    </Fragment>
  );
};

export default AuthRouter;
