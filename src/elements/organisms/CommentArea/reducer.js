import { createReducer } from 'redux-act'
import * as c from './actionTypes'
import type { State } from './model'

const comment = {
  name: '',
  email: '',
  comment: ''
}

const errors = {
  name: [],
  email: [],
  comment: []
}

const initialState: State = { running: false, comments: false, comment, errors }

export default createReducer({
  [c.requestComments]: (state) => ({...state, running: true}),
  [c.receiveComments]: (state, comments) => ({ ...state, running: false, comments }),
  [c.handleForm]: (state, evt) => ({
    ...state,
    comment: {
      ...state.comment,
      [evt.target.name]: evt.target.value
    }
  }),
  [c.handleErrors]: (state, errors) => ({ ...state, errors }),
  [c.clearForm]: (state) => ({ ...state, comment, errors })
}, initialState)
