import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Comments from './'

it('should render the Comments', () => {
    const wrapper = shallow(
        <Comments comment={{name: '', comment: ''}} />
    );
    expect(wrapper).toMatchSnapshot();
});
