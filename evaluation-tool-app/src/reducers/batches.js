import { FETCHED_BATCHS, FETCHED_ONE_BATCH } from '../actions/batches/fetch'
import {
  BATCH_CREATED,
  BATCH_UPDATED,
  BATCH_REMOVED,
  BATCH_PLAYERS_UPDATED,
} from '../actions/batches/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHS :
      return [ ...payload ]

    case FETCHED_ONE_BATCH :
      const batchIds = state.map(g => g._id)
      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case BATCH_CREATED :
      const newGame = { ...payload }
      return [newGame].concat(state)

    case BATCH_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case BATCH_PLAYERS_UPDATED :
      return state.map((batch) => {
        if (batch._id === payload.batch._id) {
          return { ...payload.batch, players: payload.players }
        }
        return batch
      })

    case BATCH_REMOVED :
        return state.filter((batch) => (batch._id !== payload._id))

    default :
      return state

  }
}
