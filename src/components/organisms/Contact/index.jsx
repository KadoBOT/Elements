import React, {PropTypes} from 'react'

import { About, ContactForm } from '../../molecules'
import './contact.css'

const Contact = () => {
  return(
    <div className="contact">
      <About
        subtitle="Let's talk and go on!"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ContactForm />
    </div>
  )
}

Contact.propTypes = {
  Contact: PropTypes.type
}

export default Contact
