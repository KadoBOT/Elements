import { createReducer } from 'redux-act'
import { clearMessage, handleMessage, handleMessageErrors } from '../actions'

export default createReducer({
  [handleMessage]: (state, evt) => ({
    ...state,
    message: {
      ...state.message,
      [evt.target.name]: evt.target.value
    }
  }),
  [handleMessageErrors]: (state, errors) => {
    console.log('state err', errors)
    return {
      ...state,
      errors
    }
  },
  [clearMessage]: (state) => ({...state,
      message: {
      name: '',
      email: '',
      telephone: '',
      message: ''
    },
    errors: {
      name: [],
      email: [],
      telephone: [],
      message: []
    }
  })
}, {
  message: {
    name: '',
    email: '',
    telephone: '',
    message: ''
  },
  errors: {
    name: [],
    email: [],
    telephone: [],
    message: []
  }
})
