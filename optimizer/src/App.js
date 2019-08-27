import React from 'react';
import './App.css';


import Login from './components/Login';
import AddPropertyForm from './components/AddPropertyForm';

function App() {
  return (
    <div className="App">
      <h1>BnBalyze</h1>
      <Login />
      <AddPropertyForm />
    </div>
  );
}

export default App;
