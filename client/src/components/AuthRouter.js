import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../landing';
import Logout from '../utils/logout';
import PrivateDoctorRoute from '../utils/PrivateDoctorRoute';
import PrivatePatientRoute from '../utils/PrivatePatientRoute';
import PrivateRoute from '../utils/PrivateRoute';
import Chat from './chat/chat';
import DoctorHome from './Doctor/DoctorHome';
import DoctorLogin from './Doctor/DoctorLogin';
import DoctorProfile from './Doctor/DoctorProfile';
import DoctorRegister from './Doctor/DoctorRegister';
import DoctorScheduleTiming from './Doctor/DoctorScheduleTiming';
import DoctorAppointments from './Doctor/DoctorAppointments';
import BookAppointment from './Patient/BookAppointment';
import Medications from './Patient/Medications';
import PatientAppointments from './Patient/PatientAppointments';
import PatientEditAppointments from './Patient/PatientEditAppointments';
import PatientFindAppointments from './Patient/PatientFindAppointments';
import PatientHome from './Patient/PatientHome';
import PatientLogin from './Patient/PatientLogin';
import PatientProfile from './Patient/PatientProfile';
import PatientRegister from './Patient/PatientRegister';
import PatientSearchDoctor from './Patient/PatientSearchDoctor';
import ChatPage from './chat/chatpage.js';

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
        <PrivatePatientRoute exact path='/patient/chat' component={ChatPage} />

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
        <PrivatePatientRoute
          exact
          path='/patient/searchDoctors'
          component={PatientSearchDoctor}
        />
        <PrivatePatientRoute
          exact
          path='/patient/findAppointments'
          component={PatientFindAppointments}
        />
        <PrivatePatientRoute
          exact
          path='/patient/bookAppointment'
          component={BookAppointment}
        />
        <PrivatePatientRoute
          exact
          path='/patient/appointments'
          component={PatientAppointments}
        />
        <PrivatePatientRoute
          exact
          path='/patient/appointments/view'
          component={PatientEditAppointments}
        />
        <PrivatePatientRoute
          exact
          path='/patient/medications'
          component={Medications}
        />
        {/* //doctor routes */}
        <Route exact path='/doctor/' component={DoctorLogin} />
        <Route exact path='/doctor/register' component={DoctorRegister} />
        <Route exact path='/doctor/login' component={DoctorLogin} />
        <PrivateDoctorRoute
          exact
          path='/doctor/appointments'
          component={DoctorAppointments}
        />
        <PrivateDoctorRoute exact path='/doctor/chat' component={ChatPage} />
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
