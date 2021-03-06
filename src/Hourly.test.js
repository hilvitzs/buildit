import React from 'react';
import ReactDOM from 'react-dom';
import { Hourly } from './Hourly';
import { shallow } from 'enzyme';

describe('Hourly', () => {
  let wrapper;
  let hourlyForecast;

  beforeEach(() => {
    hourlyForecast = {
      "dateTime": {
        "date": "9/26",
        "time": "9:00pm"
      },
      "dt": 1538017200,
      "temp": 51.54,
      "weatherIcon": "01n",
      "weatherDesc": "Clear"
    };

    wrapper = shallow(<Hourly hourlyForecast={hourlyForecast} />)
  });

  it('should render an hourly div', () => {
    expect(wrapper.find('div.hourly')).toHaveLength(1);
  });

  it('should render a time', () => {
    expect(wrapper.find('#time')).toHaveLength(1);
  });

  it('should render an image', () => {
    expect(wrapper.find('.icon')).toHaveLength(1);
  });

  it('should render a temperature', () => {
    expect(wrapper.find('#temp')).toHaveLength(1);
  });
});