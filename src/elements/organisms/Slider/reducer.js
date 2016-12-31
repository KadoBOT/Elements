import { createReducer } from 'redux-act'
import * as s from './actionTypes'
import type { State } from './model'

const initialState: State = { running: false, carousel: false }

export default createReducer({
  [s.requestCarousel]: (state) => ({...state, running: true}),
  [s.receiveCarousel]: (state, carousel) => ({ running: false, carousel })
}, initialState)
