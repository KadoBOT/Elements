import React, {PropTypes} from 'react'

import FooterMenu from '../../../containers/FooterMenu'
import { Text } from '../../atoms/Text'
import './footer.css'

const Footer = () => {
  return(
    <div className="footer">
      <Text>&reg; Elements Interactive</Text>
      <FooterMenu />
    </div>
  )
}

Footer.propTypes = {
  Footer: PropTypes.type
}

export default Footer
