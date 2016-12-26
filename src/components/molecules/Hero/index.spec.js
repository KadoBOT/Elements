import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Hero from './'

it('should render the Hero', () => {
    const wrapper = shallow(
        <Hero overlay={true} title="1" subtitle="2" />
    );
    expect(wrapper).toMatchSnapshot();
});
