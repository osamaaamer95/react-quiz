import React, { Component } from 'react';
import Word from './components/Word';
import Progress from './components/Progress';
import Answers from './components/Answers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the English Quiz!</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Progress counter={1} total={10}/>
        <Word word="ABASH" />
        <Answers answer="Sample answer"/>
        <Answers answer="Sample answer"/>
        <Answers answer="Sample answer"/>
      </div>
    );
  }
}

export default App;
