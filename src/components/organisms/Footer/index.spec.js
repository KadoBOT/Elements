import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Footer from './'

it('should render the Footer', () => {
    const wrapper = shallow(
        <Footer />
    );
    expect(wrapper).toMatchSnapshot();
});
