import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Landing/Landing';
import Quote from './Quote/Quote';

class App extends Component {
  render() {
    return(
      <div>
          <Switch>
            <Route exact path="/" component={() => <Landing/>}/>
            <Route exact path="/home" component={() => <Home/>}/>
            <Route exact path="/quoteoftheday" component={() => <Quote/>}/>
          </Switch>
      </div>
    )
  }
}

export default withRouter(App);