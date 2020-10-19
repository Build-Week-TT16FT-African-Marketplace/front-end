import React from 'react';
import {Route, Redirect } from 'react-router-dom'
import './App.css';

import Landing from './components/Landing'
import PrivateRoute from './components/PrivateRoute'
import MainMarketPage from './components/MainMarketPage'
import Login from './components/Login'

function App() {
  return (
    
    <div className="App">
      <Route exact path="/">
        <Redirect to="/landing" />
      </Route>
      <Route path='/landing' component={Landing} />
      <Route path ='/login' component={Login} />
      <Route path ='/signup' component={Signup} />
      <PrivateRoute exact path="/market" component={MainMarketPage} />
    </div>
  );
}

export default App;
