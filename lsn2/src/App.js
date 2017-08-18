import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter'

class App extends Component {
  constructor() {
    super();
    this.state = { showTxt: ['Hi!!!', 'Bye!!'] };
  }
  render() {
    return (
      <div className="App">
        <img src = {logo} />
          <div className="App-header">
          <button onClick={this.hiBye.bind(this)}>{this.state.showTxt}</button>
          <h2> Hello World</h2>
        </div>
        <Counter />
      </div>
    );
  }
  hiBye() {
    let h1 = document.querySelector('h1');
    h1.innerHTML = this.state.showTxt[0];
    this.setState(h1.innerHTML === 'Hi!!!' ? { showTxt: ['Bye!!', 'Hi!!!'] } : { showTxt: ['Hi!!!', 'Bye!!'] });
  }
  updateMinus() {
    console.log(this.props);
    let h1 = document.querySelector('h1');
    console.log(this.state.counter--);
    h1.innerHTML = this.state.counter;
  }
  updatePlus() {
    let h1 = document.querySelector('h1');
    console.log(this.state.counter++);
    h1.innerHTML = this.state.counter;
  }
}

export default App;
