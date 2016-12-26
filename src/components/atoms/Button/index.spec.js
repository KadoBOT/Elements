import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Button from './'

it('should render the Button', () => {
    const wrapper = shallow(
        <Button>Button</Button>
    );
    expect(wrapper).toMatchSnapshot();
});
