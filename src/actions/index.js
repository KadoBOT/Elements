import { createAction } from 'redux-act'
import React from 'react'
import R from 'ramda'

import api from '../helpers/_api'
import Toasted from '../helpers/_toasted'

export const requestClients = createAction('calls the api and request companies')
export const receiveClients = createAction('handle the response for the call')

export const fetchClients = () => dispatch => {
  dispatch(requestClients()) //async request clients

  return api.get('company/').then(R.compose(dispatch, receiveClients, R.prop('data'))) //and then, send the response to the action
}

export const requestCarousel = createAction('request carousel items')
export const receiveCarousel = createAction('receive the response from the api')

export const fetchCarousel = () => dispatch => {
  dispatch(requestCarousel()) // async

  return api.get('carousel/').then(R.compose(dispatch, receiveCarousel, R.prop('data'))) // handle the response
}

export const requestComments = createAction() //request the comments
export const handleErrors = createAction() // handle the errors receveid from the backend
export const receiveComments = createAction() // receive the comments
export const postComment = createAction() // action to post a new comment
export const handleForm = createAction() // changes the form value on the comment
export const clearForm = createAction() // clear the comment form (default values)

export const fetchComments = () => dispatch => {
  dispatch(requestComments()) // request the comments

  return api.get('comments/').then(R.compose(dispatch, receiveComments, R.prop('data'))) //and send another action after its received
}

export const sendComment = payload => dispatch => {
  api.post('comments/', payload) // post a new comment
  .then(() => {
    Toasted( // show the toaster with a success message
      <span>
        Comment Sent Successfully!
      </span>
    )
    dispatch(requestComments()) // request the comments again, to update with the created one
    dispatch(clearForm()) // clear the inputs
    return api.get('comments/').then(R.compose(dispatch, receiveComments, R.prop('data'))) // reiceve the comments including the posted one
  })
  .catch(err => {
    Toasted( // show toaster with error message
      <span>
        Failed to Send Comment... please try again later.
      </span>
    , 'error')
    dispatch(handleErrors(err.response.data)) // handle the errors received by the backend
  })
}

export const clearMessage = createAction() // clear message form
export const handleMessage = createAction() // handle the form
export const handleMessageErrors = createAction() // handle errors received

export const sendMessage = payload => dispatch => {
  api.post('message/', payload) // post a new message
  .then(() => {
    Toasted( // show succcess toasted
      <span>
        Message Sent Successfully!
      </span>
    )
    dispatch(clearMessage()) // clear the form
  })
  .catch(err => {
    Toasted( //show failed toasted
      <span>
        Failed to Send Message... please try again later.
      </span>
    , 'error')
    dispatch(handleMessageErrors(err.response.data)) // dispatch the errors received
  })
}
