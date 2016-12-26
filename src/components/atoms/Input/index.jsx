import React, {PropTypes} from 'react'
import R from 'ramda'

import { Text } from '../Text'
import './input.css'

const Input = ({errors, isRequired, label, name, onChange, placeholder, type, value}) => (
  <label className="input">
    <div className="input__label">
      <Text>
        {label}
        {isRequired && <span className="input__required">•</span>}
      </Text>
    </div>
    <input
      className={errors && `input__error-${errors.length !== 0}`}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={isRequired}
      type={type}
      value={value}
    />
    {errors && <ul className="input__errors">
      {R.map(e =>
        <li>{e}</li>
      , errors)}
    </ul>}
  </label>
)

Input.propTypes = {
  errors: PropTypes.array.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Input
