import React, {PropTypes} from 'react'

import './city-icon.css'

const CityIcon = ({city}) => {
  return(
    <div
      className={`city-icon city-icon__${city}`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    />
  )
}

CityIcon.propTypes = {
  props: PropTypes.type
}

export default CityIcon
