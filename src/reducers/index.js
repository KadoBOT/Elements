import { combineReducers } from 'redux'

import clients from './clients'
import careers from './careers'
import images from './images'
import menuItems from './menuItems'
import carousel from './carousel'
import comments from './comments'
import message from './message'

export default combineReducers({
  carousel,
  clients,
  careers,
  images,
  menuItems,
  comments,
  message
})
