import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header';
import Register from './components/register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
