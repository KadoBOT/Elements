import React, {PropTypes} from 'react'
import R from 'ramda'

import { Description } from '../../atoms/Text'
import './text-columns.css'

const TextColumns = ({city}) => (
  <div className="text-columns">
    {R.map(t =>
      <Description key={t}>{t}</Description>
      , city.texts)}
  </div>
)

TextColumns.propTypes = {
  city: PropTypes.shape({
    texts: PropTypes.array
  }).isRequired
}

export default TextColumns
