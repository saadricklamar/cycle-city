import React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {
  let wrapper = shallow(<About/>);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});