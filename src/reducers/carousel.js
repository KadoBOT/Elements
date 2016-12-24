import { createReducer } from 'redux-act'
import { requestCarousel, receiveCarousel } from '../actions'

export default createReducer({
  [requestCarousel]: (state) => ({...state, running: true}),
  [receiveCarousel]: (state, carousel) => ({ running: false, carousel })
}, { running: false, carousel: false })
