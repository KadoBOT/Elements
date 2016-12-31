import React from 'react'
import { shallow, render, mount } from 'enzyme';

import ContactForm from './'

it('should render the ContactForm', () => {
    const wrapper = shallow(
        <ContactForm
          errors={{ name: [], email: [], telephone: [], message: []}}
          message={{message: '', telephone: '', email: '', name: ''}}
          onChange={jest.fn()}
          onSubmit={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
