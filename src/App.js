import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Player from './Player'
import News from './News'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>FORTNITE</h1>
          <Link to="/player/">Player</Link>
        </div>

        <Route path="/" component={News} />
        <Route path="/player/" component={Player} />
      </Router>
    );
  }
}

export default App;
