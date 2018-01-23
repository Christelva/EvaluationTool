// src/containers/Lobby.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import fetchBatches, { fetchPlayers } from '../actions/batches/fetch'
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

const mapStateToProps = ({ batches, currentUser }) => ({ batches, currentUser })

export default connect(mapStateToProps, { fetchBatches, subscribeToWebsocket, fetchPlayers, push })(Lobby)
