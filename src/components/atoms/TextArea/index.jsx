import React, {PropTypes} from 'react'
import R from 'ramda'

import { Text } from '../Text'
import './text-area.css'

const TextArea = ({errors, isRequired, name, onChange, placeholder, label, value}) => (
  <label className="text-area">
    <div className="text-area__label">
      <Text>
        {label}
        {isRequired && <span className="text-area__required">•</span>}
      </Text>
    </div>
    <textarea
      className={errors && `text-area__error-${errors.length !== 0}`}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={isRequired}
      value={value}
    />
    {errors && <ul className="text-area__errors">
      {R.map(e =>
        <li>{e}</li>
      , errors)}
    </ul>}
  </label>
)

TextArea.propTypes = {
  errors: PropTypes.array.isRequired,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default TextArea
