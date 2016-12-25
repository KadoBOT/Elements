import React, {PropTypes} from 'react'

import { Text } from '../Text'
import './text-area.css'

const TextArea = ({isRequired, name, onChange, placeholder, label, value}) => {
  return(
    <label className="text-area">
      <p className="text-area__label">
        <Text>
          {label}
          {isRequired && <span className="text-area__required">•</span>}
        </Text>
      </p>
      <textarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </label>
  )
}

TextArea.propTypes = {
  props: PropTypes.type
}

export default TextArea
