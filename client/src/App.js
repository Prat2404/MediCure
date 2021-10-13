import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Landing from './components/layout/landing';
import Nabar from './components/layout/navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import DoctorRegister from './components/auth/doctorRegister';
import Home from './components/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.token) {
      setisAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Fragment>
        <Nabar isAuthenticated={isAuthenticated} />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/doctor' component={DoctorRegister} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
