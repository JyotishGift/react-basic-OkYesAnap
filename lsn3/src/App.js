import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GitApi from './github';

class App extends Component {
  render() {
    return (
      <div><GitApi /></div>
    );
  }
}
//componentWillMount - для CSSR
//componentDidMount - в компонет придут данные 
//component
//component
//component
//component

export default App;
