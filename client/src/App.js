import React, { Fragment } from 'react';
import './App.css';
import Landing from './components/layout/landing';
import Nabar from './components/layout/navbar';
import Register from './components/auth/register';
import Login from './components/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Fragment>
        <Nabar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
