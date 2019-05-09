import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import './player.css'
import api from '../api/Api'

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
    const playerData = await api.fetchPlayerData(playerId)
    this.setState({
      playerData: {...playerData},
      loading: false
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