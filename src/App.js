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
    this.submit = this.submit.bind(this);
}
  submit(){
    let nam = document.getElementById("name");
    this.setState(() => {
      console.log(this.state.name, this.state.password);
      return {name:nam.value}});
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
        submit={this.submit}
        />
        <Footer />
      </main>
    );
  }
}

export default App;
