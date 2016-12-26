import React, {PropTypes} from 'react'

import { Text } from '../../atoms/Text'
import './comments.css'

const Comments = ({comment}) => (
  <div className="comments">
    <div className="comments__info">
      <Text className="comments__info__author">{comment.name}</Text>
      {/* <Text className="comments__info__date">February 23, 2015</Text> */}
    </div>
    <Text className="comments__comment">
      {comment.comment}
    </Text>
  </div>
)

Comments.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comments
