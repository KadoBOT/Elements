import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Divider from './'

it('should render the Divider', () => {
    const wrapper = shallow(
        <Divider />
    );
    expect(wrapper).toMatchSnapshot();
});
