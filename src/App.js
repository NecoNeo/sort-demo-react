import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import AlgorithmTypes from './components/AlgorithmTypes/AlgorithmTypes.js';
import NavItems from './components/NavItems/NavItems.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SORT DEMO under construction...</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <div className="main-container">
          <div className="left-container">
            <NavItems />
          </div>
          <AlgorithmTypes />
        </div>
      </div>
    );
  }
}

export default App;
