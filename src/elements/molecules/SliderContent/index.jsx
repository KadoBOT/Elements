import React, {PropTypes} from 'react'

import { Text, Title } from '../../atoms/Text'
import { Button } from '../../atoms'
import './slider-content.css'

const SliderContent = ({carousel, image}) => (
  <div className="slider-content">
    <div className="slider-content__text">
      <Text>{carousel.title}</Text>
      <Title>{carousel.subtitle}</Title>
      <a href={carousel.action_url}>
        <Button>{carousel.action}</Button>
      </a>
    </div>
    <img alt={image} src={image} />
  </div>
)

SliderContent.propTypes = {
  carousel: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
}

export default SliderContent
