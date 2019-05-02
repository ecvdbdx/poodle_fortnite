import React, { Component } from 'react'
import './loader.css'

class Loader extends Component {
  render () {
    return (
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  }
}

export default Loader