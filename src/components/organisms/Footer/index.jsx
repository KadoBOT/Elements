import React from 'react'

import FooterMenu from '../../../containers/FooterMenu'
import { Text } from '../../atoms/Text'
import './footer.css'

const Footer = () => (
  <div className="footer">
    <Text>&reg; Elements Interactive</Text>
    <FooterMenu />
  </div>
)

export default Footer
