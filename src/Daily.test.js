import React from 'react';
import ReactDOM from 'react-dom';
import { Daily } from './Daily';
import { shallow, mount } from 'enzyme';

describe('Daily', () => {
  let wrapper;
  let dailyForecast;
  let weather;

  beforeEach(() => {
    dailyForecast = {
      "date": "9/23",
      "highTemp": 67,
      "lowTemp": 67
    };

    weather = {
      "9/23": [
        {
          "dateTime": {
            "date": "9/23",
            "time": "9:00pm"
          },
          "dt": 1537758000,
          "temp": 66.51,
          "weatherIcon": "03n",
          "weatherDesc": "Clouds"
        }
      ],
      "9/24": [
        {
          "dateTime": {
            "date": "9/24",
            "time": "12:00am"
          },
          "dt": 1537768800,
          "temp": 63.09,
          "weatherIcon": "02n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "3:00am"
          },
          "dt": 1537779600,
          "temp": 56.5,
          "weatherIcon": "03n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "6:00am"
          },
          "dt": 1537790400,
          "temp": 51.96,
          "weatherIcon": "02n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "9:00am"
          },
          "dt": 1537801200,
          "temp": 63,
          "weatherIcon": "02d",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "12:00am"
          },
          "dt": 1537812000,
          "temp": 73.46,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "3:00pm"
          },
          "dt": 1537822800,
          "temp": 69.78,
          "weatherIcon": "10d",
          "weatherDesc": "Rain"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "6:00pm"
          },
          "dt": 1537833600,
          "temp": 67.37,
          "weatherIcon": "10n",
          "weatherDesc": "Rain"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "9:00pm"
          },
          "dt": 1537844400,
          "temp": 55.29,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        }
      ],
      "9/25": [
        {
          "dateTime": {
            "date": "9/25",
            "time": "12:00am"
          },
          "dt": 1537855200,
          "temp": 48.58,
          "weatherIcon": "02n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "3:00am"
          },
          "dt": 1537866000,
          "temp": 43.51,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "6:00am"
          },
          "dt": 1537876800,
          "temp": 38.62,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "9:00am"
          },
          "dt": 1537887600,
          "temp": 44.49,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "12:00am"
          },
          "dt": 1537898400,
          "temp": 52.81,
          "weatherIcon": "02d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "3:00pm"
          },
          "dt": 1537909200,
          "temp": 57.59,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "6:00pm"
          },
          "dt": 1537920000,
          "temp": 56.4,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/25",
            "time": "9:00pm"
          },
          "dt": 1537930800,
          "temp": 49.5,
          "weatherIcon": "10n",
          "weatherDesc": "Rain"
        }
      ],
      "9/26": [
        {
          "dateTime": {
            "date": "9/26",
            "time": "12:00am"
          },
          "dt": 1537941600,
          "temp": 45.54,
          "weatherIcon": "10n",
          "weatherDesc": "Rain"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "3:00am"
          },
          "dt": 1537952400,
          "temp": 36.04,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "6:00am"
          },
          "dt": 1537963200,
          "temp": 31.42,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "9:00am"
          },
          "dt": 1537974000,
          "temp": 44.19,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "12:00am"
          },
          "dt": 1537984800,
          "temp": 60.45,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "3:00pm"
          },
          "dt": 1537995600,
          "temp": 69.36,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "6:00pm"
          },
          "dt": 1538006400,
          "temp": 69.42,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/26",
            "time": "9:00pm"
          },
          "dt": 1538017200,
          "temp": 51.54,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        }
      ],
      "9/27": [
        {
          "dateTime": {
            "date": "9/27",
            "time": "12:00am"
          },
          "dt": 1538028000,
          "temp": 42.12,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "3:00am"
          },
          "dt": 1538038800,
          "temp": 38.42,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "6:00am"
          },
          "dt": 1538049600,
          "temp": 36.2,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "9:00am"
          },
          "dt": 1538060400,
          "temp": 54,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "12:00am"
          },
          "dt": 1538071200,
          "temp": 69.6,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "3:00pm"
          },
          "dt": 1538082000,
          "temp": 74.49,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "6:00pm"
          },
          "dt": 1538092800,
          "temp": 71.56,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/27",
            "time": "9:00pm"
          },
          "dt": 1538103600,
          "temp": 52.22,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        }
      ],
      "9/28": [
        {
          "dateTime": {
            "date": "9/28",
            "time": "12:00am"
          },
          "dt": 1538114400,
          "temp": 43.47,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/28",
            "time": "3:00am"
          },
          "dt": 1538125200,
          "temp": 39.25,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/28",
            "time": "6:00am"
          },
          "dt": 1538136000,
          "temp": 36.25,
          "weatherIcon": "01n",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/28",
            "time": "9:00am"
          },
          "dt": 1538146800,
          "temp": 54.45,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/28",
            "time": "12:00am"
          },
          "dt": 1538157600,
          "temp": 74.81,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/28",
            "time": "3:00pm"
          },
          "dt": 1538168400,
          "temp": 79.8,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        }
      ]
    };
    
    wrapper = shallow(<Daily key={dailyForecast.date} dailyForecast={dailyForecast} weather={weather} />);
  });

  it('should render a day section', () => {
    expect(wrapper.find('.day')).toHaveLength(1);
  });

  it('should render 2 high-low divs', () => {
    expect(wrapper.find('.high-low')).toHaveLength(2);
  })

  it('should render a high temp', () => {
    expect(wrapper.find('#high-temp')).toHaveLength(1);
  });

  it('should render a low temp', () => {
    expect(wrapper.find('#low-temp')).toHaveLength(1);
  });

  it('should render an hourly component', () => {
    let mountWrapper = mount(<Daily key={dailyForecast.date} dailyForecast={dailyForecast} weather={weather} />);

    expect(mountWrapper.find('.hourly')).toHaveLength(1);
  });
});