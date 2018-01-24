// src/containers/BatchesContainer.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { fetchBatches } from '../../actions/batches/fetch'
import BatchItem from './BatchItem'


import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import './BatchesContainer.css'

class BatchesContainer extends PureComponent {

  render() {
    return (
      <div className="BatchesContainer">
        <h1>Current Classes</h1>
        <Paper className="paper">

        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { fetchBatches })(BatchesContainer)
