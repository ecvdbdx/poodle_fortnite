import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import '../../App.css';
import '../assets/style/style.css'
import api from '../../api/Api'

class Header extends Component {
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

  getPlayerId = async () => {
    const { playerName } = this.state
    this.setState({error: ''})
    if (playerName.match(this.matchPseudo)) {
      this.setState({loading: true})
      const playerData = await api.fetchPlayerId(playerName)

      this.props.history.push(`/player/${playerData.uid}`)
    } else {
      this.setState({ error: 'Votre pseudo doit contenir entre 3 et 16 caractères. Il peut comprendre des caractères alphanumériques ainsi que des tirets, des points et des espaces non consécutifs.'})
    }
  }

  render() {
    const { error, playerName } = this.state

    return (
      <div className="App">
        <h1>FORTNITE</h1>
        <Link to="/player/">Player</Link>
        <Link to="/news/">News</Link>
        <input type='text' value={playerName} onChange={this.handleChange} />
        {error && <p className='player__error'>{error}</p>}
        <button onClick={this.getPlayerId}>Search</button>
      </div>
    )
  }
}

export default withRouter(Header)