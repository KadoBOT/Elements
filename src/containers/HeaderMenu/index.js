import { connect } from 'react-redux'

import { HeaderMenu } from '../../components/molecules'

const mapStateToProps = state => ({
  menuItems: state.menuItems
})

export default connect(mapStateToProps)(HeaderMenu)
