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
import AuthRouter from './components/AuthRouter';
function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('Token')) {
      setisAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <AuthRouter />
    </Router>
  );
}

export default App;
