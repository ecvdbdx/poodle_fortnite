import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import '../../App.css';
import './header.css'
import '../assets/style/style.css'
import api from '../../api/Api'
import Loader from '../../Loader/Loader'

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
    this.setState({error: '', loading: true})
    if (playerName.match(this.matchPseudo)) {
      this.setState({loading: true})
      const playerData = await api.fetchPlayerId(playerName)

      this.props.history.push(`/player/${playerData.uid}`)
    } else {
      this.setState({ error: 'Votre pseudo doit contenir entre 3 et 16 caractères. Il peut comprendre des caractères alphanumériques ainsi que des tirets, des points et des espaces non consécutifs.'})
    }
    this.setState({loading: false})
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.getPlayerId()
    }
  }

  render() {
    const { error, playerName, loading } = this.state

    return (
      <div className="header">
        <h1 className="header__title">FORTNITE</h1>
        
        <nav className="header__nav">
          <ul>
            <li><Link to="/news/">News</Link></li>
            <li><Link to="/weapons/">Weapons</Link></li>
            <li><Link to="/items/">Items</Link></li>
          </ul>

          <div className="search">
            {error && <p className='search__error'>{error}</p>}
            {loading && <Loader styleLoader='search__loader' />}
            <input type='text' value={playerName} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
            <button onClick={this.getPlayerId}>Search</button>
          </div>
        </nav>
      </div>
    )
  }
}

export default withRouter(Header)