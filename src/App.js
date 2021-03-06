import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Player from './Player/Player'
import Weapons from './Weapons/Weapons'
import News from './News/News'
import AllItems from './Shop/AllItems'
import Header from './common/component/Header'
import Home from './Home/Home'

class App extends Component {

  render() {
    return (
      <Router>
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/news" component={News} />
        <Route
          path="/player/:id" 
          component={Player}
        />
        <Route path="/weapons/" component={Weapons} />
        <Route path="/items/" component={AllItems} />
      </Router>
    );
  }
}

export default App;
