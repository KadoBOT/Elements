import { combineReducers } from 'redux'

import clients from './clients'
import careers from './careers'
import images from './images'

export default combineReducers({
  clients,
  careers,
  images
})
