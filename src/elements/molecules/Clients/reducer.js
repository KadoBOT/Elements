import { createReducer } from 'redux-act'
import * as c from './actionTypes'
import type { State } from './model'

const initialState: State = { running: false, clients: false }

export default createReducer({
  [c.requestClients]: (state) => ({...state, running: true}),
  [c.receiveClients]: (state, clients) => ({ running: false, clients })
}, initialState)
