import React, {PropTypes} from 'react'

import { About, Comments, CommentForm } from '../../molecules'
import './comment-area.css'

const CommentArea = () => {
  return(
    <div className="comment-area">
      <About subtitle="Leave a Comment" />
      <CommentForm />
      <Comments />
    </div>
  )
}

CommentArea.propTypes = {
  props: PropTypes.type
}

export default CommentArea
