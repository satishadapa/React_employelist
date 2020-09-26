import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }



  render() {
    if (this.state && this.state.isLoading === false) {
      return (
        <div>
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
      )
    } else {
      return (
        <div>Loading..</div>
      )
    }
  }
}

export default connect(null, null)(App);
