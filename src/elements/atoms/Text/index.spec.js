import React from 'react'
import { shallow, render, mount } from 'enzyme';

import { Text, Description, Title, SubTitle } from './'

it('should render the Text', () => {
    const wrapper = shallow(
        <Text />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the Description', () => {
    const wrapper = shallow(
        <Description />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the Title', () => {
    const wrapper = shallow(
        <Title />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the SubTitle', () => {
    const wrapper = shallow(
        <SubTitle />
    );
    expect(wrapper).toMatchSnapshot();
});
