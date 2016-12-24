import { connect } from 'react-redux'

import { FooterMenu } from '../../components/molecules'

const mapStateToProps = state => ({
  menuItems: state.menuItems
})

export default connect(mapStateToProps)(FooterMenu)
