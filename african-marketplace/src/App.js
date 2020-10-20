import React from 'react';
import NavigationBar from './components/NavigationBar'
import { Route, Redirect } from 'react-router-dom'
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import MainMarketPage from './components/MainMarketPage'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    
    <div className="App">
      <NavigationBar />
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <PrivateRoute exact path="/Market" component={MainMarketPage} />
      <Route path ='/Login' component={Login} />
      <Route path ='/Signup' component={Signup} />
      <Route path='/Home' component={() => { 
     window.location.href = 'https://marketing-pages-chi.vercel.app/index.html'; 
     return null;
}}/>
      <Route path='/Meet-The-Team' component={() => { 
     window.location.href = 'https://marketing-pages-chi.vercel.app/team.html'; 
     return null;
}}/>
      <Route path='/About-Us' component={() => { 
     window.location.href = 'https://marketing-pages-chi.vercel.app/about.html'; 
     return null;
}}/>
    </div>
  );
}

export default App;

