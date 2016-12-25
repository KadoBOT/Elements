import React, {PropTypes} from 'react'

import { Text } from '../Text'
import './input.css'

const Input = ({isRequired, label, name, onChange, placeholder, type, value}) => {
  return(
    <label className="input">
      <p className="input__label">
        <Text>
          {label}
          {isRequired && <span className="input__required">•</span>}
        </Text>
      </p>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  )
}

Input.propTypes = {
  props: PropTypes.type
}

export default Input
