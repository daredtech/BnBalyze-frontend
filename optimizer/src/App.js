import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';





import Login from './components/Login';
import AddPropertyForm from './components/AddPropertyForm';
import Welcome from './components/Welcome';
import PrivateRoute from './components/PrivateRoute';


function App() {
  localStorage.clear();

  return (
  // to use the routes
  <Router>
    
    <div className="App">
      <h1>BnBalyze</h1>
     
      {/* <AddPropertyForm /> */}
      <Link className='link' to='/login'>Login</Link>
      <Route path='/login' component={Login} />

      <PrivateRoute exact path='/welcome' component={Welcome} />

    </div>
  
  </Router>
  );
}

export default App;
