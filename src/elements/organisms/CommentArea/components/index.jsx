import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import R from 'ramda'

import { About, Comments, CommentForm } from '../../molecules'
import './comment-area.css'

class CommentArea extends React.Component {
  componentWillMount() {
    const { fetchComments } = this.props
    fetchComments()
  }

  sendComment = () => (
    this.props.sendComment({
      name: this.props.comment.name,
      email: this.props.comment.email,
      comment: this.props.comment.comment
    })
  )

  render() {
    const { comment, comments, errors, running } = this.props
    const isLoading = running || !comments

    if(isLoading) {
      return <div>Loading...</div>
    }

    return(
      <div className="comment-area">
        <About subtitle="Leave a Comment" />
        <CommentForm
          comment={comment}
          errors={errors}
          onChange={this.props.handleForm}
          onSubmit={this.sendComment}
        />
        <div className="comment-area__comments">
          {R.map(c =>
            <Comments key={Math.random()} comment={c} />
          ,comments.results)}
        </div>
      </div>
    )
  }
}

CommentArea.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  comments: PropTypes.any.isRequired,
  errors: PropTypes.object.isRequired,
  running: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  running: state.comments.running,
  comments: state.comments.comments,
  comment: state.comments.comment,
  errors: state.comments.errors,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const CommentAreaContainer = connect(
  createSelector(
    (state, props) => state.comments,
    comments => ({ comments })
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(CommentArea)
