import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Picture from './'

it('should render the Picture', () => {
    const wrapper = shallow(
        <Picture className="test" />
    );
    expect(wrapper).toMatchSnapshot();
});
