import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Contact from './'

it('should render the Contact', () => {
    const wrapper = shallow(
        <Contact
          errors={{}}
          message={{}}
          handleMessage={jest.fn()}
          sendMessage={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
