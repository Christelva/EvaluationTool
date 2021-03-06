// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BatchesContainer from './containers/batches/BatchesContainer'
import BatchPage from './containers/batches/BatchPage'
import {

  SignIn,
  SignUp
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={BatchPage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
