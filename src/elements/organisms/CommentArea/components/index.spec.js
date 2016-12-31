import React from 'react'
import { shallow, render, mount } from 'enzyme';

import CommentArea from './'

it('should render the CommentArea', () => {
    const wrapper = shallow(
        <CommentArea
          fetchComments={jest.fn()}
          comment={{}}
          comments={false}
          errors={{}}
          running={true}
        />
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render the CommentArea', () => {
    const wrapper = shallow(
        <CommentArea
          fetchComments={jest.fn()}
          comment={{}}
          comments={{
            results: []
          }}
          errors={{}}
          handleForm={jest.fn()}
          running={false}
        />
    );
    expect(wrapper).toMatchSnapshot();
});
