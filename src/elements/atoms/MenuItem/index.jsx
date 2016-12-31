import React, {PropTypes} from 'react'

import { Text } from '../../atoms/Text'
import './menu-item.css'

const MenuItem = ({item}) => (
  <Text className="menu-item">
    <a href={`#${item}`}>{item}</a>
  </Text>
)

MenuItem.propTypes = {
  item: PropTypes.string
}

export default MenuItem
