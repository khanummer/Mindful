import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import Home from './Home/Home';

class App extends Component {
  render() {
    return(
      <div>
          <Switch>
            <Route exact path="/" component={() => <Landing/>}/>
            <Route exact path="/home" component={() => <Home/>}/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App);