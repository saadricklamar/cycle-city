import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper = shallow(<App/>);
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

