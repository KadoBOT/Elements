import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'

import * as actions from '../../actions'
import Slider from '../../components/organisms/Slider'

const mapStateToProps = state => ({
  running: state.carousel.running,
  carousel: state.carousel.carousel,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
