import React, {PropTypes} from 'react'
import R from 'ramda'

import { MenuItem } from '../../atoms'
import './footer-menu.css'

const FooterMenu = ({menuItems}) => (
  <div className="footer-menu">
    {R.map(m =>
      <div key={m} className="footer-menu__item">
        <MenuItem item={m.toUpperCase()} />
      </div>
    ,menuItems)}
  </div>
)

FooterMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
}

export default FooterMenu
