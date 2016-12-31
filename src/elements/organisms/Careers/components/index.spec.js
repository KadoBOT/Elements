import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Careers from './'

it('should render the Careers', () => {
    const wrapper = shallow(
        <Careers careers={[]} />
    );
    expect(wrapper).toMatchSnapshot();
});
