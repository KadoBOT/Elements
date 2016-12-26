import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import Clients from '../../components/molecules/Clients'

const mapStateToProps = state => ({
  running: state.clients.running,
  clients: state.clients.clients,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
