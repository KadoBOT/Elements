import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Content from './'

it('should render the Content', () => {
    const wrapper = shallow(
        <Content />
    );
    expect(wrapper).toMatchSnapshot();
});
