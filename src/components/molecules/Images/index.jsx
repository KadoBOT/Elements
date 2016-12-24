import React, {PropTypes} from 'react'
import R from 'ramda'

import './images.css'

const Images = ({images}) => {
  return(
    <div className="images">
      {R.map(i =>
        <div className={`images__${i}`} />
      , images)}
    </div>
  )
}

Images.propTypes = {
  props: PropTypes.type
}

export default Images
