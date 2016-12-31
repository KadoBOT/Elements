import { createReducer } from 'redux-act'
import type { State } from './model'

const initialState: State = ['Home', 'Careers', 'Blog', 'Contact']

export default createReducer({}, initialState)
