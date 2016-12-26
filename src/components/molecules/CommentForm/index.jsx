import React, {PropTypes} from 'react'

import { Button, Input, TextArea } from '../../atoms'
import './comment-form.css'

const CommentForm = ({comment, errors, onSubmit, onChange}) => {
  const submitForm = () => {
    onSubmit()
  }

  return(
    <div className="comment-form">
      <div className="comment-form__row">
        <Input
          errors={errors.name}
          isRequired
          label="Name"
          name="name"
          placeholder="Place your name here..."
          onChange={onChange}
          type="text"
          value={comment.name}
        />
        <Input
          errors={errors.email}
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
          errors={errors.comment}
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
  comment: PropTypes.any.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CommentForm
