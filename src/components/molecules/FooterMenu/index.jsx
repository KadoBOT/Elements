import React, {PropTypes} from 'react'
import R from 'ramda'

import { MenuItem } from '../../atoms'
import './footer-menu.css'

const FooterMenu = ({menuItems}) => {
  return(
    <div className="footer-menu">
      {R.map(m =>
        <div className="footer-menu__item">
          <MenuItem item={m.toUpperCase()} />
        </div>
      ,menuItems)}
    </div>
  )
}

FooterMenu.propTypes = {
  props: PropTypes.type
}

export default FooterMenu
