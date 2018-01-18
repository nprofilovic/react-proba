import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import './font-awesome.min.css';
import Youtube from './components/Youtube';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Youtube />
      </div>
    );
  }
}

export default App;
