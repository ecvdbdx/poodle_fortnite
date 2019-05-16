import React, { Component } from 'react'
import './loader.css'

class Loader extends Component {

  render () {
    const { styleLoader } = this.props

    return (
      <div className={styleLoader}>
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  }
}

export default Loader