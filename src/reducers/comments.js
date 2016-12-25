import { createReducer } from 'redux-act'
import { clearForm, handleForm, requestComments, receiveComments } from '../actions'

export default createReducer({
  [requestComments]: (state) => ({...state, running: true}),
  [receiveComments]: (state, comments) => ({ ...state, running: false, comments }),
  [handleForm]: (state, evt) => ({
    ...state,
    comment: {
      ...state.comment,
      [evt.target.name]: evt.target.value
    }
  }),
  [clearForm]: (state) => ({...state, comment: {
    name: '',
    email: '',
    comment: ''
  }})
}, {
  running: false,
  comments: false,
  comment: {
    name: '',
    email: '',
    comment: ''
  }
})
