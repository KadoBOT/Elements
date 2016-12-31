import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Clients from './'

it('should render the Clients', () => {
    const wrapper = shallow(
        <Clients
          fetchClients={jest.fn()}
          clients={false}
          running={true}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the Clients', () => {
    const wrapper = shallow(
        <Clients
          fetchClients={jest.fn()}
          clients={{results: []}}
          running={false}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
