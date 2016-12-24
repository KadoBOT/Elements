import React, {PropTypes} from 'react'

import { Button, Input, TextArea } from '../../atoms'
import { Title, Text } from '../../atoms/Text'
import './contact-form.css'

const ContactForm = () => {
  return(
    <div className="contact-form">
      <div className="contact-form__info">
        <Title>Send us a message</Title>
        <p className="contact-form__info__required">
          <Text className="contact-form__info__required--bullet">•</Text>
          <Text className="contact-form__info__required--subtitle">Required Fields</Text>
        </p>
      </div>
      <div className="contact-form__row">
        <Input
          isRequired
          label="Name"
          placeholder="Place your name here..."
          type="text"
        />
      </div>
      <div className="contact-form__row">
        <Input
          isRequired
          label="Email"
          placeholder="username@company.com"
          type="email"
        />
      </div>
      <div className="contact-form__row">
        <Input
          isRequired
          label="Telephone"
          placeholder="Place your telephone number here..."
          type="text"
        />
      </div>
      <div className="contact-form__row--text-area">
        <TextArea
          label="Message"
          isRequired
          placeholder="Place your message here..."
        />
      </div>
      <div className="contact-form__row--submit" >
        <Button>SEND</Button>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  props: PropTypes.type
}

export default ContactForm
