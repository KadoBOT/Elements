import React, {PropTypes} from 'react'

import './city-icon.css'

const CityIcon = ({city}) => (
  <div
    className={`city-icon city-icon__${city}`}
    data-aos="fade-up"
    data-aos-anchor-placement="center-center"
  />
)

CityIcon.propTypes = {
  city: PropTypes.string.isRequired
}

export default CityIcon
