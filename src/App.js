import React, { Component } from 'react';
import './App.css';
import { BackTop } from 'antd';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage'
import ReservationPage from './Pages/ReservationPage/ReservationPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          
          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/reservation" component={ReservationPage} />
          </Switch>
        </Router>

        <BackTop />
      </div>
    );
  }
}

export default App;