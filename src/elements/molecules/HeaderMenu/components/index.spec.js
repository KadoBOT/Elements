import React from 'react'
import { shallow, render, mount } from 'enzyme';

import HeaderMenu from './'

it('should render the HeaderMenu', () => {
    const wrapper = shallow(
        <HeaderMenu menuItems={[]} />
    );
    expect(wrapper).toMatchSnapshot();
});
