import { createReducer } from 'redux-act'
import { clearMessage, handleMessage } from '../actions'

export default createReducer({
  [handleMessage]: (state, evt) => ({
    ...state,
    message: {
      ...state.message,
      [evt.target.name]: evt.target.value
    }
  }),
  [clearMessage]: (state) => ({...state, message: {
    name: '',
    email: '',
    telephone: '',
    message: ''
  }})
}, {
  message: {
    name: '',
    email: '',
    telephone: '',
    message: ''
  }
})
