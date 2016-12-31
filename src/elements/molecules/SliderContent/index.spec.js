import React from 'react'
import { shallow, render, mount } from 'enzyme';

import SliderContent from './'

it('should render the SliderContent', () => {
    const wrapper = shallow(
        <SliderContent
          carousel={{ title: '', subtitle: '', action_url: '', action: ''}}
          image="image"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
