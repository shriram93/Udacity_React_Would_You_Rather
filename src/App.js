import React, { Component } from 'react'
import './App.css'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handeInitialData  } from './store/actions/shared'
import 'materialize-css/dist/css/materialize.min.css'
import PrivateRoute from './components/private-route/private-route';
import LogIn from './components/logIn/logIn'
import Home from './components/home/home'
import AddQuestion from './components/add-question/add-question';
import Questions from './components/questions/questions';
import Navbar from './components/navbar/navbar';

class WouldYouRatherApp extends Component {
  componentDidMount() {
    this.props.dispatch(handeInitialData())
  }
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <Route path='/login' component={LogIn} />
          <PrivateRoute path='/add' component={AddQuestion} />
          <PrivateRoute path='/questions/:questionid' component={Questions} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(WouldYouRatherApp))
