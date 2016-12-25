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

export const requestComments = createAction()
export const receiveComments = createAction()
export const postComment = createAction()
export const handleForm = createAction()
export const clearForm = createAction()

export const fetchComments = () => dispatch => {
  dispatch(requestComments())

  return api.get('comments/').then(R.compose(dispatch, receiveComments, R.prop('data')))
}

// export const sendComment = payload => api.post('comments/', payload).then(fetchComments())

export const sendComment = payload => dispatch => {
  api.post('comments/', payload)
  .then(() => {
    dispatch(requestComments())
    dispatch(clearForm())
    return api.get('comments/').then(R.compose(dispatch, receiveComments, R.prop('data')))
  })
}

export const clearMessage = createAction()
export const handleMessage = createAction()

export const sendMessage = payload => dispatch => {
  api.post('message/', payload)
  .then(() => dispatch(clearMessage()))
}
