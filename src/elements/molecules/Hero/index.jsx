import React, {PropTypes} from 'react'

import { HeroTitle, HeroSubtitle } from '../../atoms/HeroText'
import './hero.css'

const Hero = ({overlay, title, subtitle}) => (
  <div className="hero">
    {overlay && <div className="hero__gradient" />}
    <HeroTitle>{title}</HeroTitle>
    <HeroSubtitle>{subtitle}</HeroSubtitle>
  </div>
)

Hero.propTypes = {
  overlay: PropTypes.bool,
  title:PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

export default Hero
