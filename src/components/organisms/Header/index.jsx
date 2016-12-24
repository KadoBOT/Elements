import React, {PropTypes} from 'react'

import HeaderMenu from '../../../containers/HeaderMenu'
import './header.css'

const Header = () => {
  return(
    <div className="header">
      <div className="header__logo" />
      <HeaderMenu />
    </div>
  )
}

Header.propTypes = {
  props: PropTypes.type
}

export default Header
