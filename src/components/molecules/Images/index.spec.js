import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Images from './'

it('should render the Images', () => {
    const wrapper = shallow(
        <Images images={[]} />
    );
    expect(wrapper).toMatchSnapshot();
});
