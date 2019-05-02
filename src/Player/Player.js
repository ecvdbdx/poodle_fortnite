import React, { Component } from 'react'
import Loader from '../Loader/Loader'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      playerId: '',
      playerData: 0,
      playerName: '',
      loading: false,
    };
  }

  handleChange = (event) => {
    this.setState({playerName: event.target.value});
  }

  getPlayerData = async () => {
    const { playerName } = this.state
    this.setState({loading: true})
    const playerId = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${playerName}`, {
      method: 'GET'
    })
    .then((response) => {
      if (response.status !== 200) {
        this.setState({
          loading: false
        })
        throw response
      }
      return response.json()
    })
    .then((response) => {
      this.setState({
        playerId: response.uid
      })
      return response.uid
    })
    .catch((error) => {console.log(error)})

    fetch(`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${playerId}`, {
      method: 'GET'
    })
    .then((response) => {
      if (response.status !== 200) {
        this.setState({
          loading: false
        })
        throw response
      }
      return response.json()
    })
    .then((response) => {
      this.setState({
        playerData: {...response},
        loading: false
      })
      return response
    })
  }

  render() {
    const { playerData, playerId, playerName, loading } = this.state
    return (
      <div>
        {loading && <Loader /> }
        {!loading && (
          <div>
            <input type='text' value={playerName} onChange={this.handleChange} />
            <button onClick={() => this.getPlayerData()}>Search</button>
            <h1>player</h1>
            <p>{playerId}</p>
            <p>{playerData.epicName}</p>
          </div>
        )}
      </div>
    )
  }
}

export default Player