import React, {PropTypes} from 'react'
import R from 'ramda'

import './images.css'

const Images = ({images}) => (
  <div className="images">
    {R.map(i =>
      <div key={i} className={`images__${i}`} />
    , images)}
  </div>
)

Images.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Images
