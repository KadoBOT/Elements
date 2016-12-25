import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import CommentArea from '../../components/organisms/CommentArea'

const mapStateToProps = state => ({
  running: state.comments.running,
  comments: state.comments.comments,
  comment: state.comments.comment
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CommentArea)
