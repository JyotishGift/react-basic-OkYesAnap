import React, { Component } from 'react';
import logo from './logo.svg';
import './theme/App.css';
import Header from './components/header/header';
import Router from './router';
import Footer from './components/footer/footer';
import Signin from './components/auth/signin';
import IndexPage from './components/index/indexpage';
import Signup from './components/auth/signup';
import NotFoud from './components/notfound'

var components = {
  IndexPage,
  Signin,
  Signup,
  NotFoud
} 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Andrey',
      password: 'Parol'
    }
}
  render() {
    let {name, password} = this.state;
    return (
      <main className="App">
        <Header />
        <Router         
        name={name}
        password={password}
        components={components}
        />
        <Footer />
      </main>
    );
  }
}

export default App;
