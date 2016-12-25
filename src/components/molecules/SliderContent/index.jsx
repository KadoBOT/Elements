import React, {PropTypes} from 'react'

import { Text, Title } from '../../atoms/Text'
import { Button } from '../../atoms'
import './slider-content.css'

const SliderContent = ({carousel, image}) => {
  return(
    <div className="slider-content">
      <div className="slider-content__text">
        <Text>{carousel.title}</Text>
        <Title>{carousel.subtitle}</Title>
        <a href={carousel.action_url}>
          <Button>{carousel.action}</Button>
        </a>
      </div>
      <img src={image} />
    </div>
  )
}

SliderContent.propTypes = {
  props: PropTypes.type
}

export default SliderContent
