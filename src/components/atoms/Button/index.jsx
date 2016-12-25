import React, {PropTypes} from 'react'
import './button.css'

const Button = ({onSubmit, children}) => {
  return(
    <button
      className="button"
      onClick={onSubmit}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  props: PropTypes.type
}

export default Button
