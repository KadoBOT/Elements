import React, {PropTypes} from 'react'

import { CityIcon, Picture } from '../../atoms'
import { Title } from '../../atoms/Text'
import './city.css'

const City = ({city, children}) => (
  <div className={`city city__${city.name}`}>
    <Picture className={`picture__${city.name}`} />
    <CityIcon city={city.name} />
    <Title>
      {city.where}
    </Title>
    {children}
  </div>
)

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
  }),
  children: PropTypes.node.isRequired
}

export default City
