import React from 'react'
import { shallow, render, mount } from 'enzyme';

import Input from './'

it('should render the Input', () => {
    const wrapper = shallow(
        <Input
          errors={[]}
          isRequired={true}
          label="name"
          name="name"
          onChange={jest.fn()}
          placeholder="place name here..."
          type="text"
          value="John Doe"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
