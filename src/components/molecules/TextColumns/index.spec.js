import React from 'react'
import { shallow, render, mount } from 'enzyme';

import TextColumns from './'

it('should render the TextColumns', () => {
    const wrapper = shallow(
        <TextColumns city={{texts: []}} />
    );
    expect(wrapper).toMatchSnapshot();
});
