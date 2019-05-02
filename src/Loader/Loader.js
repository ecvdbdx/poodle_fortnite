import React, { Component } from 'react'
import './loader.css'

class Loader extends Component {
  render () {
    return (
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    )
  }
}

export default Loader