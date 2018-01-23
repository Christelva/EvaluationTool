// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchGames, { fetchPlayers } from '../actions/games/fetch'
import { connect as subscribeToWebsocket } from '../actions/websocket'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import './Lobby.css'

class Lobby extends PureComponent {

  render() {
    return (
      <div className="Lobby">
        <h1>Current Classes</h1>
        <Paper className="paper">

        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })

export default connect(mapStateToProps, { fetchGames, subscribeToWebsocket, fetchPlayers, push })(Lobby)
