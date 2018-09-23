import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  // beforeEach = () => {
  //   let wrapper = shallow(<App />);
  //   console.log(wrapper);
  // };

  it('Should load with input', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input').toHaveLength(1));
  });
});


