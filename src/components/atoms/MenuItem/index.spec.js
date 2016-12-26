import React from 'react'
import { shallow, render, mount } from 'enzyme';

import MenuItem from './'

it('should render the MenuItem', () => {
    const wrapper = shallow(
        <MenuItem item="blog" />
    );
    expect(wrapper).toMatchSnapshot();
});
