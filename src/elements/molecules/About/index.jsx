import React, {PropTypes} from 'react'

import { SubTitle, Text, Title } from '../../atoms/Text'
import { Divider, Separator } from '../../atoms'

import './about.css'

const About = ({title, subtitle, text}) => (
  <div
    className="about"
    data-aos="flip-up"
    data-aos-anchor-placement="top-center"
  >
    {title && <Title>
      {title}
    </Title>}
    {title && <Separator /> }
    {subtitle && <SubTitle>
      {subtitle}
    </SubTitle>}
    {subtitle && <Divider /> }
    {text && <Text>
      {text}
    </Text>}
  </div>
)

About.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
}

export default About
