import React, { Component } from 'react';
import './App.css';
import { BackTop } from 'antd';

import HomePage from './Pages/HomePage/HomePage'
import Navbar from './cmps/AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <BackTop />
        <HomePage></HomePage>
      </div>
    );
  }
}

export default App;