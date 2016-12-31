import React from 'react'
import { shallow, render, mount } from 'enzyme';

import App from './'

it('should render the App', () => {
    const wrapper = shallow(
        <App />
    );
    expect(wrapper).toMatchSnapshot();
});
