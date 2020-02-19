import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './router/Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
