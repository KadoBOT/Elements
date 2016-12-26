import React, {PropTypes} from 'react'

import './picture.css'

const Picture = ({className}) => (
  <div className={`picture ${className}`} />
)

Picture.propTypes = {
  className: PropTypes.string
}

export default Picture
