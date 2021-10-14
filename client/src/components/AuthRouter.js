import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import App from '../App';
import Login from './auth/login';
import Register from './auth/register';
import Home from './home';
import Logout from './utils/logout';
import Navbar from './layout/navbar';
import Landing from './layout/landing';
const AuthRouter = () => {
  return (
    <Fragment>
      <Route exact path='/' component={Landing} />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Fragment>
  );
};

export default AuthRouter;
