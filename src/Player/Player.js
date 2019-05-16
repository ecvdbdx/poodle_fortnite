import React, { Component } from 'react'
import Loader from '../Loader/Loader'
import './player.css'
import api from '../api/Api'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerData: {},
      loading: false,
      error: '',
      tabActiv: 'solo'
    };
  }

  componentDidMount() {
    this.getPlayerData(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getPlayerData(this.props.match.params.id)
    }
  }

  getPlayerData = async (playerId) => {
    this.setState({error: ''})
    const playerData = await api.fetchPlayerData(playerId)
    this.setState({
      playerData: {...playerData},
      loading: false
    })    
  }

  handleTab = (tab) => {
    this.setState({tabActiv: tab})
  }

  render() {
    const { playerData, loading, tabActiv } = this.state
    return (
      <div>
        {loading && <Loader /> }
        {!loading && (
          <div className='player'>
            <h1 className="player__name">{playerData.epicName}</h1>
            {playerData.overallData ? (
              <div>
                <div>
                  <h2>Global data</h2>
                  <p>Kills : {playerData.overallData.defaultModes.kills}</p>
                  <p>Matches Played : {playerData.overallData.defaultModes.matchesplayed}</p>
                  <p>Top 1 : {playerData.overallData.defaultModes.placetop1}</p>
                </div>
                <div>
                  <div>
                    <button onClick={() => this.handleTab('solo')}>Solo</button>
                    <button onClick={() => this.handleTab('duo')}>Duo</button>
                    <button onClick={() => this.handleTab('squad')}>Squad</button>
                  </div>
                  {tabActiv === 'solo' && (
                    <div>
                      <h3>{tabActiv}</h3>
                      <p>Kills: {playerData.data.keyboardmouse.defaultsolo.default.kills}</p>
                    </div>
                  )}
                  {tabActiv === 'duo' && (
                    <div>
                      <h3>{tabActiv}</h3>
                      <p>Kills: {playerData.data.keyboardmouse.defaultduo.default.kills}</p>
                    </div>
                  )}
                  {tabActiv === 'squad' && (
                    <div>
                      <h3>{tabActiv}</h3>
                      <p>Kills: {playerData.data.keyboardmouse.defaultsquad.default.kills}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : ''}
          </div>
        )}
      </div>
    )
  }
}

export default Player