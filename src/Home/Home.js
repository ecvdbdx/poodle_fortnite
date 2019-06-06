import React, { Component } from 'react';
import '../App.css';
import News from '../News/News'
import Items from '../Shop/StoreItems'

class Home extends Component {

  render() {
    return (
      <div>
        <div>
          <Items />
        </div>
        <div>
          <News />
        </div>
      </div>
    )
  }
}

export default Home
