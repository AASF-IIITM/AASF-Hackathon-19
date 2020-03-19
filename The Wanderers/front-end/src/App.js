import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar1 from './Navbar';
import First from './First.js';
import Second from './Second.js';
import Fourth from './Fourth.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar1 />
        <First />
		<Fourth/>
      </div>
    );
  }
}

export default App;
