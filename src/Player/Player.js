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
      error: ''
    };

    this.matchPseudo = /([a-z0-9 -.])([^ {2}]){2,15}/ig
  }

  handleChange = (event) => {
    this.setState({playerName: event.target.value});
  }

  getPlayerData = async () => {
    const { playerName } = this.state
    this.setState({error: ''})
    if (playerName.match(this.matchPseudo)) {
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
    } else {
      this.setState({ error: 'Votre pseudo doit contenir entre 3 et 16 caractères. Il peut comprendre des caractères alphanumériques ainsi que des tirets, des points et des espaces non consécutifs.'})
    }
  }

  render() {
    const { playerData, playerId, playerName, loading, error } = this.state
    return (
      <div>
        {loading && <Loader /> }
        {!loading && (
          <div>
            <input type='text' value={playerName} onChange={this.handleChange} />
            {error && <p className='player__error'>{error}</p>}
            <button onClick={() => this.getPlayerData()}>Search</button>
            <h1>player</h1>
            <p>{playerId}</p>
            <p>{playerData.epicName}</p>
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