import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logout from '../utils/logout';
import Landing from '../landing';
import Chat from './chat/chat';

import PatientLogin from './Patient/PatientLogin';
import PatientRegister from './Patient/PatientRegister';
import PatientHome from './Patient/PatientHome';
import PatientLanding from './Patient/PatientLanding';

import DoctorRegister from './Doctor/DoctorRegister';
import DoctorLogin from './Doctor/DoctorLogin';
import DoctorHome from './Doctor/DoctorHome';
import DoctorLanding from './Doctor/DoctorLanding';

import PrivateRoute from '../utils/PrivateRoute';
import PrivatePatientRoute from '../utils/PrivatePatientRoute';
import PrivateDoctorRoute from '../utils/PrivateDoctorRoute';
import PatientProfile from './Patient/PatientProfile';
import DoctorProfile from './Doctor/DoctorProfile';
import DoctorScheduleTiming from './Doctor/DoctorScheduleTiming';

const AuthRouter = () => {
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <Switch>
        <PrivateRoute exact path='/chat' component={Chat} />
        <Route exact path='/logout' component={Logout} />
        {/* patient routes */}
        <Route exact path='/patient/' component={PatientLogin} />
        <Route exact path='/patient/login' component={PatientLogin} />
        <Route exact path={'/patient/register'} component={PatientRegister} />

        <PrivatePatientRoute
          exact
          path='/patient/home'
          component={PatientHome}
        />
        <PrivatePatientRoute
          exact
          path='/patient/profile'
          component={PatientProfile}
        />

        {/* //doctor routes */}
        <Route exact path='/doctor/' component={DoctorLogin} />
        <Route exact path='/doctor/register' component={DoctorRegister} />
        <Route exact path='/doctor/login' component={DoctorLogin} />
        <PrivateDoctorRoute exact path='/doctor/home' component={DoctorHome} />
        <PrivateDoctorRoute
          exact
          path='/doctor/profile'
          component={DoctorProfile}
        />
        <PrivateDoctorRoute
          exact
          path='/doctor/scheduleTimings'
          component={DoctorScheduleTiming}
        />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
