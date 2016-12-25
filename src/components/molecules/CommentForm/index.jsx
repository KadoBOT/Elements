import React, {PropTypes} from 'react'

import { Button, Input, TextArea } from '../../atoms'
import { Text, Subtitle } from '../../atoms/Text'
import './comment-form.css'

const CommentForm = ({comment, onSubmit, onChange}) => {
  const submitForm = () => {
    onSubmit()
  }

  return(
    <div className="comment-form">
      <div className="comment-form__row">
        <Input
          isRequired
          label="Name"
          name="name"
          placeholder="Place your name here..."
          onChange={onChange}
          type="text"
          value={comment.name}
        />
        <Input
          isRequired
          label="Email"
          name="email"
          placeholder="username@company.com"
          onChange={onChange}
          type="email"
          value={comment.email}
        />
      </div>
      <div className="comment-form__row--text-area">
        <TextArea
          label="Comment"
          isRequired
          name="comment"
          placeholder="Place your comment here..."
          onChange={onChange}
          value={comment.comment}
        />
      </div>
      <div className="comment-form__row--submit" >
        <Button onSubmit={submitForm}>
          Submit Comment
        </Button>
      </div>
    </div>
  )
}

CommentForm.propTypes = {
  props: PropTypes.type
}

export default CommentForm
