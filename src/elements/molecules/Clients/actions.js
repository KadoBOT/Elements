import { createAction } from 'redux-act'
import * as c from './actionTypes'

export const fetchClients = () => dispatch => {
  dispatch(c.requestClients()) //async request clients

  return api.get('company/').then(R.compose(dispatch, c.receiveClients, R.prop('data'))) //and then, send the response to the action
}
