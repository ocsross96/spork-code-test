import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Avatar from './';

const defaultProps = {
  id: "79e09af2-5154-4e5f-8929-1bb10663daa9",
  firstName: "Phil",
  imageSrc: "https://api.spork.digital/static/rooms-test/1-c.jpg",
  theme: "inline",
  inlineStyle: {
    transform: "translateX(0px)"
  }
}

/* eslint-disable no-undef */
describe('<Avatar />', () => {
  it('should render correctly', () => {
    mount(<Avatar {...defaultProps} />);
  });

  it('should render a Link when the theme = "overlay"', () => {
    const props = {...defaultProps, theme: "overlay" };
    const avatar = mount(<BrowserRouter><Avatar {...props} /></BrowserRouter>);

    expect(avatar.find('a')).toHaveLength(1);
  });
});