import * as c from './actionTypes'

export const sendMessage = payload => dispatch => {
  api.post('message/', payload) // post a new message
  .then(() => {
    Toasted( // show succcess toasted
      <span>
        Message Sent Successfully!
      </span>
    )
    dispatch(c.clearMessage()) // clear the form
  })
  .catch(err => {
    Toasted( //show failed toasted
      <span>
        Failed to Send Message... please try again later.
      </span>
    , 'error')
    dispatch(c.handleMessageErrors(err.response.data)) // dispatch the errors received
  })
}
