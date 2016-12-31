import React from 'react'
import { shallow, render, mount } from 'enzyme';

import About from './'

it('should render the About', () => {
    const wrapper = shallow(
        <About
          title="title"
          subtitle="subtitle"
          text="text"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
