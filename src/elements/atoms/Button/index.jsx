import React, {PropTypes} from 'react'
import './button.css'

const Button = ({onSubmit, children}) => (
  <button
    className="button"
    onClick={onSubmit}
  >
    {children}
  </button>
)

Button.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
