import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Router from './Router';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
