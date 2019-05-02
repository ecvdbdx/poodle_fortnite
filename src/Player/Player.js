import React, { Component } from 'react'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      playerId: '',
      playerData: 0,
      playerName: '',
    };
  }

  handleChange = (event) => {
    this.setState({playerName: event.target.value});
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

    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${playerId}`, {
      method: 'GET'
    }).then((response) => response.json())
    .then((response) => {
      this.setState({
        playerData: {...response}
      })
      return response
    })
  }

  render() {
    const { playerData, playerId, playerName } = this.state

    return (
      <div>
        <input type='text' value={playerName} onChange={this.handleChange} />
        <button>Search</button>
        <h1>player</h1>
        <p>{playerId}</p>
        <p>{playerData.epicName}</p>
      </div>
    )
  }
}

export default Player