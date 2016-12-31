import React from 'react'
import { shallow, render, mount } from 'enzyme';

import CommentForm from './'

it('should render the CommentForm', () => {
    const wrapper = shallow(
        <CommentForm
          comment={{name: '', email: '', comment: ''}}
          errors={{name: [], email: [], comment: []}}
          onSubmit={jest.fn()}
          onChange={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
