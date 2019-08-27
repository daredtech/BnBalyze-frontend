import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Register from './components/Register/Register';
import Login from './components/Login';
import AddPropertyForm from './components/AddPropertyForm';
import Welcome from './components/Welcome';
import PrivateRoute from './components/PrivateRoute';
import PredictPropertyPrice from './components/PredictPropertyPrice';


function App() {
  localStorage.clear();
  return (
  // to use the routes
  <Router>
    
    <div className="App">
      <h1>BnBalyze</h1>
 
      {/* temp for easier testing      */}
      
      {/* Login Form */}
      <Link className='link' to='/login'>Login</Link>
      <Route path='/login' component={Login} />

      {/* AddPropertyForm Form */}
      <Link className='link' to='/add-property'>Add Property</Link>
      <Route path='/add-property' component={AddPropertyForm} />

      {/* Login Form */}
      <Link className='link' to='/predict-property-price'>Predict Property Price</Link>
      <Route path='/predict-property-price' component={PredictPropertyPrice} />


      <PrivateRoute exact path='/welcome' component={Welcome} />

      <Switch>
        <Route exact path="/register" component={Register} />
      </Switch>

    </div>
  
  </Router>
  );
}

export default App;
