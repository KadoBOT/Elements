import React, {PropTypes} from 'react'

import { Text } from '../../atoms/Text'
import './comments.css'

const Comments = () => {
  return(
    <div className="comments">
      <p className="comments__info">
        <Text className="comments__info__author">Username</Text>
        <Text className="comments__info__date">February 23, 2015</Text>
      </p>
      <Text className="comments__comment">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  )
}

Comments.propTypes = {
  props: PropTypes.type
}

export default Comments
