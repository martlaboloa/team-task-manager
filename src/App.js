import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamTaskManager  from './features'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <TeamTaskManager />
        </div>
      </div>
    );
  }
}

export default App;
