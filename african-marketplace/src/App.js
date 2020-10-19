import React from 'react';
import {Route, Redirect, Link, Switch } from 'react-router-dom';
import './App.css';
import loginSchema from './validation/loginSchema';
import signupSchema from './validation/signupSchema';
import Signup from './components/Signup';
import Login from './components/Login';

import Landing from './components/Landing'

function App() {
  return (
    
    <div className="App">
      <nav>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/landing'>Home</Link>
      </nav>
      <div className='routes'>
      <Switch>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/signup'}>
          <Signup />
        </Route>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
        <Route path='/landing' component={Landing} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
