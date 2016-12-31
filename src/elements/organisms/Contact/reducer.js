import { createReducer } from 'redux-act'
import * as c from './actionTypes'
import type { State } from './model'

const message =  {
  name: '',
  email: '',
  telephone: '',
  message: ''
}

const errors = {
  name: [],
  email: [],
  telephone: [],
  message: []
}

const initialState: State = { message, errors }

export default createReducer({
  [handleMessage]: (state, evt) => ({
    ...state,
    message: {
      ...state.message,
      [evt.target.name]: evt.target.value
    }
  }),
  [handleMessageErrors]: (state, errArr) => ({
    ...state,
    errors: errArr
  }),
  [clearMessage]: (state) => ({
    ...state,
    message,
    errors
  })
}, initialState)
