import { createAction } from 'redux-act'
import React from 'react'
import R from 'ramda'

import api from '../helpers/_api'
import Toasted from '../helpers/_toasted'

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
export const handleErrors = createAction()
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
    Toasted(
      <span>
        Comment Sent Successfully!
      </span>
    )
    dispatch(requestComments())
    dispatch(clearForm())
    return api.get('comments/').then(R.compose(dispatch, receiveComments, R.prop('data')))
  })
  .catch(err => {
    Toasted(
      <span>
        Failed to Send Comment... please try again later.
      </span>
    , 'error')
    dispatch(handleErrors(err.response.data))
  })
}

export const clearMessage = createAction()
export const handleMessage = createAction()
export const handleMessageErrors = createAction()

export const sendMessage = payload => dispatch => {
  api.post('message/', payload)
  .then(() => {
    Toasted(
      <span>
        Message Sent Successfully!
      </span>
    )
    dispatch(clearMessage())
  })
  .catch(err => {
    Toasted(
      <span>
        Failed to Send Message... please try again later.
      </span>
    , 'error')
    dispatch(handleMessageErrors(err.response.data))
  })
}
