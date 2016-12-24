import React, {PropTypes} from 'react'

import { Button, Input, TextArea } from '../../atoms'
import { Text, Subtitle } from '../../atoms/Text'
import './comment-form.css'

const CommentForm = () => {
  return(
    <div className="comment-form">
      <div className="comment-form__row">
        <Input
          isRequired
          label="Name"
          placeholder="Place your name here..."
          type="text"
        />
        <Input
          isRequired
          label="Email"
          placeholder="username@company.com"
          type="email"
        />
      </div>
      <div className="comment-form__row--text-area">
        <TextArea
          label="Comment"
          isRequired
          placeholder="Place your comment here..."
        />
      </div>
      <div className="comment-form__row--submit" >
        <Button>Submit Comment</Button>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  props: PropTypes.type
}

export default CommentForm
