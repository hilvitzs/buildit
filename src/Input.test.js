import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import Input from './Input';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

describe('Input', () => {
  let wrapper;

  beforeEach(() => {
    let mockGetWeather = jest.fn();
    let mockCity = {
      name: 'Broomfield'
    };

    wrapper = shallow(<Input getWeather={mockGetWeather} city={mockCity} />)
  });

  it ('should have an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  })

  it('should start out with state', () => {
    let state = {
      input: ''
    };

    expect(wrapper.state()).toEqual(state);
  });

  it('should update state on change', () => {
    let input = wrapper.find('input');

    input.simulate('change', {target: {value: '80516'}});

    expect(wrapper.state().input).toEqual('80516');
  });

  it('should have a submit button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});