import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Parallax from './'

it('should render the Parallax', () => {
    const wrapper = shallow(
        <Parallax />
    );
    expect(wrapper).toMatchSnapshot();
});
