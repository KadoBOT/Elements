import { combineReducers } from 'redux'

import clients from './clients'
import careers from './careers'
import images from './images'
import menuItems from './menuItems'
import carousel from './carousel'

export default combineReducers({
  carousel,
  clients,
  careers,
  images,
  menuItems
})
