import React, {PropTypes} from 'react'

import { Text } from '../Text'
import './text-area.css'

const TextArea = ({isRequired, placeholder, label}) => {
  return(
    <label className="text-area">
      <p className="text-area__label">
        <Text>
          {label}
          {isRequired && <span className="text-area__required">•</span>}
        </Text>
      </p>
      <textarea placeholder={placeholder} />
    </label>
  )
}

TextArea.propTypes = {
  props: PropTypes.type
}

export default TextArea
