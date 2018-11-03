import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import LogIn from './components/logIn/logIn'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar';



class WouldYouRatherApp extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/login' render={({ history }) => (
          <LogIn />
        )}
        />
      </div>
    );
  }
}

export default WouldYouRatherApp;
