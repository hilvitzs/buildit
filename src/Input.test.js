import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import Input from './Input';
import { shallow } from 'enzyme';

describe('Input', () => {
  let wrapper;

  beforeEach(() => {
    let mockGetWeather = jest.fn();

    wrapper = shallow(<Input getWeather={mockGetWeather} />)
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

  it('should set state to an empty string with submit', () => {
    let input = wrapper.find('input');
    let form = wrapper.find('form');

    input.simulate('change', {target: {value: '80516'}});

    expect(wrapper.instance().state.input).toEqual('80516');
    
    form.simulate('submit', { preventDefault () {} });
    
    expect(wrapper.instance().state.input).toEqual('');
  });
});