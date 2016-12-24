import React, {PropTypes} from 'react'

import { Text } from '../Text'
import './input.css'

const Input = ({isRequired, label, placeholder, type}) => {
  return(
    <label className="input">
      <p className="input__label">
        <Text>
          {label}
          {isRequired && <span className="input__required">•</span>}
        </Text>
      </p>
      <input
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}

Input.propTypes = {
  props: PropTypes.type
}

export default Input
