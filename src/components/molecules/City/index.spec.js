import React from 'react'
import { shallow, render, mount } from 'enzyme';

import City from './'

it('should render the City', () => {
    const wrapper = shallow(
        <City city={{name: 'barcelona', where: 'ES'}}>
          <h1>Hello</h1>
        </City>
    );
    expect(wrapper).toMatchSnapshot();
});
