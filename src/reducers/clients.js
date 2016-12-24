import { createReducer } from 'redux-act'
import { requestClients, receiveClients } from '../actions'

export default createReducer({
  [requestClients]: (state) => ({...state, running: true}),
  [receiveClients]: (state, clients) => ({ running: false, clients })
}, { running: false, clients: false })
