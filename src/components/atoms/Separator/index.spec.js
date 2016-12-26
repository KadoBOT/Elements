import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Separator from './'

it('should render the Separator', () => {
    const wrapper = shallow(
        <Separator />
    );
    expect(wrapper).toMatchSnapshot();
});
