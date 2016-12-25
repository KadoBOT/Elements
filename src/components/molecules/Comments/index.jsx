import React, {PropTypes} from 'react'

import { Text } from '../../atoms/Text'
import './comments.css'

const Comments = ({comment}) => {
  return(
    <div className="comments">
      <p className="comments__info">
        <Text className="comments__info__author">{comment.name}</Text>
        {/* <Text className="comments__info__date">February 23, 2015</Text> */}
      </p>
      <Text className="comments__comment">
        {comment.comment}
      </Text>
    </div>
  )
}

Comments.propTypes = {
  props: PropTypes.type
}

export default Comments
