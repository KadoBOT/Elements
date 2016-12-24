import { createAction } from 'redux-act'
import R from 'ramda'
import api from '../helpers/_api'

export const requestClients = createAction()
export const receiveClients = createAction()

export const fetchClients = () => dispatch => {
  dispatch(requestClients())

  return api.get('company/').then(R.compose(dispatch, receiveClients, R.prop('data')))
}

export const requestCarousel = createAction()
export const receiveCarousel = createAction()

export const fetchCarousel = () => dispatch => {
  dispatch(requestCarousel())

  return api.get('carousel/').then(R.compose(dispatch, receiveCarousel, R.prop('data')))
}
