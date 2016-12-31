import React from 'react'
import { shallow, render, mount } from 'enzyme';

import TextArea from './'

it('should render the TextArea', () => {
    const wrapper = shallow(
        <TextArea
          errors={[]}
          isRequired={true}
          label="comment"
          name="comment"
          onChange={jest.fn()}
          placeholder="place comment here"
          value="hi"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
