import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'
import Contact from '../../components/organisms/Contact'

const mapStateToProps = state => ({
  message: state.message.message,
  errors: state.message.errors
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
