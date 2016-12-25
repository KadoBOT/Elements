import { createReducer } from 'redux-act'

const defaultState = ['Home', 'Careers', 'Blog', 'Contact']

export default createReducer({}, defaultState)
