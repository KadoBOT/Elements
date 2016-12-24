import { createReducer } from 'redux-act'

const defaultState = ['Home', 'About', 'Careers', 'Blog', 'Contact']

export default createReducer({}, defaultState)
