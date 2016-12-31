import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { About, ContactForm } from '../../molecules'
import './contact.css'

const Contact = ({ errors, message, handleMessage, sendMessage}) => {
  const submitMessage = () => (
    sendMessage({
      name: message.name,
      email: message.email,
      telephone: message.telephone,
      message: message.message,
    })
  )
  return(
    <div id="CONTACT" className="contact">
      <About
        subtitle="Let's talk and go on!"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ContactForm
        errors={errors}
        message={message}
        onChange={handleMessage}
        onSubmit={submitMessage}
      />
    </div>
  )
}

Contact.propTypes = {
  errors: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  handleMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  message: state.message.message,
  errors: state.message.errors
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
