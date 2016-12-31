import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Home from './'

it('should render the Home', () => {
    const wrapper = shallow(
        <Home />
    );
    expect(wrapper).toMatchSnapshot();
});
