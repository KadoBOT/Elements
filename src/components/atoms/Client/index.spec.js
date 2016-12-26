import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Client from './'

it('should render the Client', () => {
    const wrapper = shallow(
        <Client client={{logo: 'x', logo_2x: '2x'}} />
    );
    expect(wrapper).toMatchSnapshot();
});
