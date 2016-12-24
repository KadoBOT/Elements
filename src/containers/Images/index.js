import { connect } from 'react-redux'

import Images from '../../components/molecules/Images'

const mapStateToProps = state => ({
  images: state.images
})

export default connect(mapStateToProps)(Images)
