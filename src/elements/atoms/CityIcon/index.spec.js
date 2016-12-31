import React from 'react'
import { shallow, render, mount } from 'enzyme';

import CityIcon from './'

it('should render the CityIcon', () => {
    const wrapper = shallow(
        <CityIcon city="barcelona" />
    );
    expect(wrapper).toMatchSnapshot();
});
