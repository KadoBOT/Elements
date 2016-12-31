import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Header from './'

it('should render the Header', () => {
    const wrapper = shallow(
        <Header />
    );
    expect(wrapper).toMatchSnapshot();
});
