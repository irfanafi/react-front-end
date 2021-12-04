import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Login from './components/Login';
import Admin from './components/Admin';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';


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
      <BrowserRouter>
        <div className="Logistic App">
          <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path="/home/*" element={<Admin/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>
        
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
