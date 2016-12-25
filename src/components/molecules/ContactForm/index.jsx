import React, {PropTypes} from 'react'

import { Button, Input, TextArea } from '../../atoms'
import { Title, Text } from '../../atoms/Text'
import './contact-form.css'

const ContactForm = ({message, onChange, onSubmit}) => {
  const submitForm = () => {
    onSubmit()
  }

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
          name="name"
          onChange={onChange}
          placeholder="Place your name here..."
          type="text"
          value={message.name}
        />
      </div>
      <div className="contact-form__row">
        <Input
          isRequired
          label="Email"
          name="email"
          onChange={onChange}
          placeholder="username@company.com"
          type="email"
          value={message.email}
        />
      </div>
      <div className="contact-form__row">
        <Input
          isRequired
          label="Telephone"
          name="telephone"
          onChange={onChange}
          placeholder="Place your telephone number here..."
          type="text"
          value={message.telephone}
        />
      </div>
      <div className="contact-form__row--text-area">
        <TextArea
          label="Message"
          isRequired
          name="message"
          onChange={onChange}
          placeholder="Place your message here..."
          value={message.message}
        />
      </div>
      <div className="contact-form__row--submit" >
        <Button onSubmit={submitForm}>SEND</Button>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  props: PropTypes.type
}

export default ContactForm
