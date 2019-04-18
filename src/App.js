import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Player from './Player/Player'
import News from './News/News'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>FORTNITE</h1>
          <Link to="/player/">Player</Link>
          <Link to="/news/">News</Link>
        </div>

        <Route path="/news" component={News} />
        <Route path="/player/" component={Player} />
      </Router>
    );
  }
}

export default App;
