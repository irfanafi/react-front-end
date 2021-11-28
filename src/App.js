import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Admin from './components/Admin';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      loginPage: false,
      adminPage: false,
      registrationPage: true,
      parcelPage: false,
      historyPage: false
    };
    this.changePages = this.changePages.bind(this);
  };

  changePages = (context) => {
    this.setState({
        loginPage: false,
        adminPage: true
    })
}

  render(){
    return (
      <div className="Logistic App">
        { this.state.loginPage && <Login onPageChange={this.changePages} />}
        { this.state.adminPage && <Admin />}
        { this.state.registrationPage && <Admin onPageChange={this.changePages}/>}
      </div>
    );
  }
  
}

export default App;
