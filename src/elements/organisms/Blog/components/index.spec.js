import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Blog from './'

it('should render the Blog', () => {
    const wrapper = shallow(
        <Blog />
    );
    expect(wrapper).toMatchSnapshot();
});
