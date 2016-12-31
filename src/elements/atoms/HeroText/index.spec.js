import React from 'react'
import { shallow, render, mount } from 'enzyme';

import { HeroText, HeroTitle, HeroSubtitle } from './'

it('should render the HeroText', () => {
    const wrapper = shallow(
        <HeroText />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the HeroTitle', () => {
    const wrapper = shallow(
        <HeroTitle />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the HeroSubtitle', () => {
    const wrapper = shallow(
        <HeroSubtitle />
    );
    expect(wrapper).toMatchSnapshot();
});
