import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jobored from'./Jobored.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={Jobored} className='App-Jobored' alt="logo"/>
      </header>
    </div>
  );
}

export default App;
