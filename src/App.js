import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Player from './Player/Player'
import News from './News/News'
import Header from './common/component/Header'

class App extends Component {

  render() {
    return (
      <Router>
        <Header />

        <Route path="/news" component={News} />
        <Route
          path="/player/:id" 
          component={Player}
        />
      </Router>
    );
  }
}

export default App;
