import React, {PropTypes} from 'react'

import { Text } from '../../atoms/Text'
import './menu-item.css'

const MenuItem = ({item}) => {
  return(
    <Text className="menu-item">
      {item}
    </Text>
  )
}

MenuItem.propTypes = {
  props: PropTypes.type
}

export default MenuItem
