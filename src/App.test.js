import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders app', () => {
    expect(wrapper.find('div.App')).toHaveLength(1);
  });

  it('renders a forecast-container', () => {
    expect(wrapper.find('section.forecast-container')).toHaveLength(1);
  });
});


