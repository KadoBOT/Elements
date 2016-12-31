import React from 'react'
import { shallow, render, mount } from 'enzyme';

import FooterMenu from './'

it('should render the FooterMenu', () => {
    const wrapper = shallow(
        <FooterMenu menuItems={[]} />
    );
    expect(wrapper).toMatchSnapshot();
});
