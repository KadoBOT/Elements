import { createAction } from 'redux-act'
import React from 'react'
import R from 'ramda'

import * as c from './actionTypes'

export const fetchComments = () => dispatch => {
  dispatch(c.requestComments()) // request the comments

  return api.get('comments/').then(R.compose(dispatch, c.receiveComments, R.prop('data'))) //and send another action after its received
}

export const sendComment = payload => dispatch => {
  api.post('comments/', payload) // post a new comment
  .then(() => {
    Toasted( // show the toaster with a success message
      <span>
        Comment Sent Successfully!
      </span>
    )
    dispatch(c.requestComments()) // request the comments again, to update with the created one
    dispatch(c.clearForm()) // clear the inputs
    return api.get('comments/').then(R.compose(dispatch, c.receiveComments, R.prop('data'))) // reiceve the comments including the posted one
  })
  .catch(err => {
    Toasted( // show toaster with error message
      <span>
        Failed to Send Comment... please try again later.
      </span>
    , 'error')
    dispatch(c.handleErrors(err.response.data)) // handle the errors received by the backend
  })
}
