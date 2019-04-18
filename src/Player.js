import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      playerId: '',
      playerData: 0 
    };
  }

  async componentDidMount() {
    const playerId = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Ninja', {
      method: 'GET'
    }).then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        playerId: response.uid
      })
      return response.uid
    })

    await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${playerId}`, {
      method: 'GET'
    }).then((response) => {
      return response.json()
    })
    .then((response) => {
      this.setState({
        playerData: {...response}
      })
      return response
    })
  }

  render() {
    return (
      <div>
        <h1>player</h1>
        <p>{this.state.playerId}</p>

      </div>
    )
  }
}

export default Player