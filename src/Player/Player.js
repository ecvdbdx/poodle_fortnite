import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import './player.css'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      playerId: '',
      playerData: {},
      loading: false,
      error: ''
    };
  }

  componentDidMount() {
    this.getPlayerData(this.props.match.params.id)
  }

  getPlayerData = async (playerId) => {
    this.setState({error: ''})
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
    const { playerData, loading } = this.state
    return (
      <div>
        {loading && <Loader /> }
        {!loading && (
          <div>
            <h1 className="player__name">{playerData.epicName}</h1>
            {playerData.overallData ? (
              <div>
                <p>Kills : {playerData.overallData.defaultModes.kills}</p>
                <p>Matches Played : {playerData.overallData.defaultModes.matchesplayed}</p>
                <p>Top 1 : {playerData.overallData.defaultModes.placetop1}</p>
              </div>
            ) : ''}
          </div>
        )}
      </div>
    )
  }
}

export default Player