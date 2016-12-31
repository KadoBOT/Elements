import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Slider from './'

it('should render the Slider', () => {
    const wrapper = shallow(
        <Slider
          running={true}
          carousel={false}
          fetchCarousel={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the Slider', () => {
    const wrapper = shallow(
        <Slider
          running={false}
          carousel={{results: []}}
          fetchCarousel={jest.fn()}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
