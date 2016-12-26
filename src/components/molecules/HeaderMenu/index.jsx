import React, {PropTypes} from 'react'
import R from 'ramda'

import { MenuItem } from '../../atoms'
import './header-menu.css'

const HeaderMenu = ({menuItems}) => (
  <div className="header-menu">
    {R.map((m) =>
      <div className="header-menu__item" key={m}>
        <MenuItem item={m.toUpperCase()} />
      </div>
    ,menuItems)}
  </div>
)

HeaderMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
}

export default HeaderMenu
