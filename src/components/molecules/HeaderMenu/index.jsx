import React, {PropTypes} from 'react'
import R from 'ramda'

import { MenuItem } from '../../atoms'
import './header-menu.css'

const HeaderMenu = ({menuItems}) => {
  return(
    <div className="header-menu">
      {R.map(m =>
        <div className="header-menu__item">
          <MenuItem item={m.toUpperCase()} />
        </div>
      ,menuItems)}
    </div>
  )
}

HeaderMenu.propTypes = {
  props: PropTypes.type
}

export default HeaderMenu
