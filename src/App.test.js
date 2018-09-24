import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import App from './App';
import { shallow, mount } from 'enzyme';

const api_key = process.env.REACT_APP_API_KEY;

describe('App', () => {
  let shallowWrapper;
  let weatherState;
  let list;
  let fiveDay;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);

    fiveDay = [
      {
        "date": "9/23",
        "highTemp": 87,
        "lowTemp": 66
      },
      {
        "date": "9/24",
        "highTemp": 73,
        "lowTemp": 51
      },
      {
        "date": "9/25",
        "highTemp": 58,
        "lowTemp": 39
      },
      {
        "date": "9/26",
        "highTemp": 69,
        "lowTemp": 31
      },
      {
        "date": "9/27",
        "highTemp": 74,
        "lowTemp": 36
      },
      {
        "date": "9/28",
        "highTemp": 75,
        "lowTemp": 36
      }
    ];

    weatherState = {
      "9/23": [
        {
          "dateTime": {
            "date": "9/23",
            "time": "3:00pm"
          },
          "dt": 1537736400,
          "temp": 87.42,
          "weatherIcon": "01d",
          "weatherDesc": "Clear"
        },
        {
          "dateTime": {
            "date": "9/23",
            "time": "6:00pm"
          },
          "dt": 1537747200,
          "temp": 81.39,
          "weatherIcon": "03n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/23",
            "time": "9:00pm"
          },
          "dt": 1537758000,
          "temp": 66.47,
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
          "temp": 62.56,
          "weatherIcon": "02n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "3:00am"
          },
          "dt": 1537779600,
          "temp": 55.48,
          "weatherIcon": "03n",
          "weatherDesc": "Clouds"
        },
        {
          "dateTime": {
            "date": "9/24",
            "time": "6:00am"
          },
          "dt": 1537790400,
          "temp": 51.45,
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
        }
      ]
    };

    list = [
      {
        "dt": 1537736400,
        "main": {
          "temp": 87.42,
          "temp_min": 83.42,
          "temp_max": 87.42,
          "pressure": 843.24,
          "sea_level": 1018.13,
          "grnd_level": 843.24,
          "humidity": 25,
          "temp_kf": 2.22
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.63,
          "deg": 238.504
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-23 21:00:00"
      },
      {
        "dt": 1537747200,
        "main": {
          "temp": 81.39,
          "temp_min": 78.39,
          "temp_max": 81.39,
          "pressure": 842.05,
          "sea_level": 1017.1,
          "grnd_level": 842.05,
          "humidity": 25,
          "temp_kf": 1.67
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 6.53,
          "deg": 243.504
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-24 00:00:00"
      },
      {
        "dt": 1537758000,
        "main": {
          "temp": 66.47,
          "temp_min": 64.46,
          "temp_max": 66.47,
          "pressure": 842.24,
          "sea_level": 1018.68,
          "grnd_level": 842.24,
          "humidity": 35,
          "temp_kf": 1.11
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 6.76,
          "deg": 260.506
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-24 03:00:00"
      },
      {
        "dt": 1537768800,
        "main": {
          "temp": 62.56,
          "temp_min": 61.56,
          "temp_max": 62.56,
          "pressure": 842.14,
          "sea_level": 1019.43,
          "grnd_level": 842.14,
          "humidity": 32,
          "temp_kf": 0.56
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 11.34,
          "deg": 272.501
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-24 06:00:00"
      },
      {
        "dt": 1537779600,
        "main": {
          "temp": 55.48,
          "temp_min": 55.48,
          "temp_max": 55.48,
          "pressure": 842.26,
          "sea_level": 1020.23,
          "grnd_level": 842.26,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 36
        },
        "wind": {
          "speed": 4.5,
          "deg": 256
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-24 09:00:00"
      },
      {
        "dt": 1537790400,
        "main": {
          "temp": 51.45,
          "temp_min": 51.45,
          "temp_max": 51.45,
          "pressure": 843.8,
          "sea_level": 1023.25,
          "grnd_level": 843.8,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 6.2,
          "deg": 352
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-24 12:00:00"
      },
      {
        "dt": 1537801200,
        "main": {
          "temp": 63,
          "temp_min": 63,
          "temp_max": 63,
          "pressure": 845.08,
          "sea_level": 1023.5,
          "grnd_level": 845.08,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 5.53,
          "deg": 321.006
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-24 15:00:00"
      },
      {
        "dt": 1537812000,
        "main": {
          "temp": 73.46,
          "temp_min": 73.46,
          "temp_max": 73.46,
          "pressure": 844.23,
          "sea_level": 1020.65,
          "grnd_level": 844.23,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.57,
          "deg": 231.5
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-24 18:00:00"
      },
      {
        "dt": 1537822800,
        "main": {
          "temp": 69.78,
          "temp_min": 69.78,
          "temp_max": 69.78,
          "pressure": 843.32,
          "sea_level": 1019.53,
          "grnd_level": 843.32,
          "humidity": 37,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 7.54,
          "deg": 254.504
        },
        "rain": {
          "3h": 0.075
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-24 21:00:00"
      },
      {
        "dt": 1537833600,
        "main": {
          "temp": 67.37,
          "temp_min": 67.37,
          "temp_max": 67.37,
          "pressure": 843.75,
          "sea_level": 1020.24,
          "grnd_level": 843.75,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 4.72,
          "deg": 214.506
        },
        "rain": {
          "3h": 0.015
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-25 00:00:00"
      },
      {
        "dt": 1537844400,
        "main": {
          "temp": 55.29,
          "temp_min": 55.29,
          "temp_max": 55.29,
          "pressure": 844.68,
          "sea_level": 1022.88,
          "grnd_level": 844.68,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.59,
          "deg": 251.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-25 03:00:00"
      },
      {
        "dt": 1537855200,
        "main": {
          "temp": 48.58,
          "temp_min": 48.58,
          "temp_max": 48.58,
          "pressure": 845.2,
          "sea_level": 1025.02,
          "grnd_level": 845.2,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 3.24,
          "deg": 257
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-25 06:00:00"
      },
      {
        "dt": 1537866000,
        "main": {
          "temp": 43.51,
          "temp_min": 43.51,
          "temp_max": 43.51,
          "pressure": 846.76,
          "sea_level": 1028.61,
          "grnd_level": 846.76,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.73,
          "deg": 13.0046
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-25 09:00:00"
      },
      {
        "dt": 1537876800,
        "main": {
          "temp": 38.62,
          "temp_min": 38.62,
          "temp_max": 38.62,
          "pressure": 849.75,
          "sea_level": 1033.64,
          "grnd_level": 849.75,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.99,
          "deg": 23.508
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-25 12:00:00"
      },
      {
        "dt": 1537887600,
        "main": {
          "temp": 44.49,
          "temp_min": 44.49,
          "temp_max": 44.49,
          "pressure": 853.12,
          "sea_level": 1035.65,
          "grnd_level": 853.12,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.57,
          "deg": 278.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-25 15:00:00"
      },
      {
        "dt": 1537898400,
        "main": {
          "temp": 52.81,
          "temp_min": 52.81,
          "temp_max": 52.81,
          "pressure": 852.29,
          "sea_level": 1032.22,
          "grnd_level": 852.29,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 4.16,
          "deg": 105.007
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-25 18:00:00"
      },
      {
        "dt": 1537909200,
        "main": {
          "temp": 57.59,
          "temp_min": 57.59,
          "temp_max": 57.59,
          "pressure": 850.76,
          "sea_level": 1029.55,
          "grnd_level": 850.76,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 8.66,
          "deg": 112
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-25 21:00:00"
      },
      {
        "dt": 1537920000,
        "main": {
          "temp": 56.4,
          "temp_min": 56.4,
          "temp_max": 56.4,
          "pressure": 851.95,
          "sea_level": 1031.32,
          "grnd_level": 851.95,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 9.78,
          "deg": 93.0039
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-26 00:00:00"
      },
      {
        "dt": 1537930800,
        "main": {
          "temp": 49.5,
          "temp_min": 49.5,
          "temp_max": 49.5,
          "pressure": 855.68,
          "sea_level": 1038.24,
          "grnd_level": 855.68,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 9.31,
          "deg": 68.5018
        },
        "rain": {
          "3h": 0.09
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-26 03:00:00"
      },
      {
        "dt": 1537941600,
        "main": {
          "temp": 45.54,
          "temp_min": 45.54,
          "temp_max": 45.54,
          "pressure": 857.18,
          "sea_level": 1042.49,
          "grnd_level": 857.18,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.68,
          "deg": 2.50397
        },
        "rain": {
          "3h": 0.48
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-26 06:00:00"
      },
      {
        "dt": 1537952400,
        "main": {
          "temp": 36.04,
          "temp_min": 36.04,
          "temp_max": 36.04,
          "pressure": 856.95,
          "sea_level": 1043.89,
          "grnd_level": 856.95,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.6,
          "deg": 113.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-26 09:00:00"
      },
      {
        "dt": 1537963200,
        "main": {
          "temp": 31.42,
          "temp_min": 31.42,
          "temp_max": 31.42,
          "pressure": 856.46,
          "sea_level": 1044.3,
          "grnd_level": 856.46,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.25,
          "deg": 167.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-26 12:00:00"
      },
      {
        "dt": 1537974000,
        "main": {
          "temp": 44.19,
          "temp_min": 44.19,
          "temp_max": 44.19,
          "pressure": 855.32,
          "sea_level": 1040.26,
          "grnd_level": 855.32,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.16,
          "deg": 248.001
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-26 15:00:00"
      },
      {
        "dt": 1537984800,
        "main": {
          "temp": 60.45,
          "temp_min": 60.45,
          "temp_max": 60.45,
          "pressure": 853.48,
          "sea_level": 1033.4,
          "grnd_level": 853.48,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.97,
          "deg": 149
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-26 18:00:00"
      },
      {
        "dt": 1537995600,
        "main": {
          "temp": 69.36,
          "temp_min": 69.36,
          "temp_max": 69.36,
          "pressure": 850.29,
          "sea_level": 1028.23,
          "grnd_level": 850.29,
          "humidity": 35,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.51,
          "deg": 168.003
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-26 21:00:00"
      },
      {
        "dt": 1538006400,
        "main": {
          "temp": 69.42,
          "temp_min": 69.42,
          "temp_max": 69.42,
          "pressure": 848.4,
          "sea_level": 1026.32,
          "grnd_level": 848.4,
          "humidity": 22,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.93,
          "deg": 293.506
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-27 00:00:00"
      },
      {
        "dt": 1538017200,
        "main": {
          "temp": 51.54,
          "temp_min": 51.54,
          "temp_max": 51.54,
          "pressure": 849.65,
          "sea_level": 1029.66,
          "grnd_level": 849.65,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.98,
          "deg": 288.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-27 03:00:00"
      },
      {
        "dt": 1538028000,
        "main": {
          "temp": 42.12,
          "temp_min": 42.12,
          "temp_max": 42.12,
          "pressure": 849.31,
          "sea_level": 1031.39,
          "grnd_level": 849.31,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.51,
          "deg": 273.001
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-27 06:00:00"
      },
      {
        "dt": 1538038800,
        "main": {
          "temp": 38.42,
          "temp_min": 38.42,
          "temp_max": 38.42,
          "pressure": 848.79,
          "sea_level": 1031.96,
          "grnd_level": 848.79,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.39,
          "deg": 245.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-27 09:00:00"
      },
      {
        "dt": 1538049600,
        "main": {
          "temp": 36.2,
          "temp_min": 36.2,
          "temp_max": 36.2,
          "pressure": 848.88,
          "sea_level": 1032.98,
          "grnd_level": 848.88,
          "humidity": 60,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.62,
          "deg": 183
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-27 12:00:00"
      },
      {
        "dt": 1538060400,
        "main": {
          "temp": 54,
          "temp_min": 54,
          "temp_max": 54,
          "pressure": 849.72,
          "sea_level": 1031.12,
          "grnd_level": 849.72,
          "humidity": 60,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.92,
          "deg": 190.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-27 15:00:00"
      },
      {
        "dt": 1538071200,
        "main": {
          "temp": 69.6,
          "temp_min": 69.6,
          "temp_max": 69.6,
          "pressure": 848.95,
          "sea_level": 1026.68,
          "grnd_level": 848.95,
          "humidity": 30,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 6.6,
          "deg": 139.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-27 18:00:00"
      },
      {
        "dt": 1538082000,
        "main": {
          "temp": 74.49,
          "temp_min": 74.49,
          "temp_max": 74.49,
          "pressure": 846.73,
          "sea_level": 1023.29,
          "grnd_level": 846.73,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 7.54,
          "deg": 156
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-27 21:00:00"
      },
      {
        "dt": 1538092800,
        "main": {
          "temp": 71.56,
          "temp_min": 71.56,
          "temp_max": 71.56,
          "pressure": 845.96,
          "sea_level": 1022.76,
          "grnd_level": 845.96,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.94,
          "deg": 124.503
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-28 00:00:00"
      },
      {
        "dt": 1538103600,
        "main": {
          "temp": 52.22,
          "temp_min": 52.22,
          "temp_max": 52.22,
          "pressure": 847.23,
          "sea_level": 1026.48,
          "grnd_level": 847.23,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 5.17,
          "deg": 74.002
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-28 03:00:00"
      },
      {
        "dt": 1538114400,
        "main": {
          "temp": 43.47,
          "temp_min": 43.47,
          "temp_max": 43.47,
          "pressure": 847.22,
          "sea_level": 1028.6,
          "grnd_level": 847.22,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.62,
          "deg": 319.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-28 06:00:00"
      },
      {
        "dt": 1538125200,
        "main": {
          "temp": 39.25,
          "temp_min": 39.25,
          "temp_max": 39.25,
          "pressure": 846.9,
          "sea_level": 1029.62,
          "grnd_level": 846.9,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.72,
          "deg": 277.5
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-28 09:00:00"
      },
      {
        "dt": 1538136000,
        "main": {
          "temp": 36.25,
          "temp_min": 36.25,
          "temp_max": 36.25,
          "pressure": 846.98,
          "sea_level": 1030.81,
          "grnd_level": 846.98,
          "humidity": 65,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.13,
          "deg": 189.503
        },
        "rain": {},
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2018-09-28 12:00:00"
      },
      {
        "dt": 1538146800,
        "main": {
          "temp": 54.45,
          "temp_min": 54.45,
          "temp_max": 54.45,
          "pressure": 847.78,
          "sea_level": 1029.05,
          "grnd_level": 847.78,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.06,
          "deg": 212.5
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-28 15:00:00"
      },
      {
        "dt": 1538157600,
        "main": {
          "temp": 74.81,
          "temp_min": 74.81,
          "temp_max": 74.81,
          "pressure": 847.21,
          "sea_level": 1024.67,
          "grnd_level": 847.21,
          "humidity": 27,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 0.58,
          "deg": 111.501
        },
        "rain": {},
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-09-28 18:00:00"
      }
    ];
  });

  const mocks = () => {
    let mockWeather = { "cod": "200", "message": 0.0047, "cnt": 40, "list": [{ "dt": 1537747200, "main": { "temp": 79.5, "temp_min": 78.39, "temp_max": 79.5, "pressure": 842.05, "sea_level": 1017.1, "grnd_level": 842.05, "humidity": 25, "temp_kf": 0.62 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "clouds": { "all": 32 }, "wind": { "speed": 6.53, "deg": 243.504 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-24 00:00:00" }, { "dt": 1537758000, "main": { "temp": 65.3, "temp_min": 64.46, "temp_max": 65.3, "pressure": 842.24, "sea_level": 1018.68, "grnd_level": 842.24, "humidity": 35, "temp_kf": 0.46 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "clouds": { "all": 44 }, "wind": { "speed": 6.76, "deg": 260.506 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-24 03:00:00" }, { "dt": 1537768800, "main": { "temp": 62.11, "temp_min": 61.56, "temp_max": 62.11, "pressure": 842.14, "sea_level": 1019.43, "grnd_level": 842.14, "humidity": 32, "temp_kf": 0.31 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "clouds": { "all": 24 }, "wind": { "speed": 11.34, "deg": 272.501 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-24 06:00:00" }, { "dt": 1537779600, "main": { "temp": 55.76, "temp_min": 55.48, "temp_max": 55.76, "pressure": 842.26, "sea_level": 1020.23, "grnd_level": 842.26, "humidity": 50, "temp_kf": 0.15 }, "weather": [{ "id": 802, "main": "Clouds", "description": "scattered clouds", "icon": "03n" }], "clouds": { "all": 36 }, "wind": { "speed": 4.5, "deg": 256 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-24 09:00:00" }, { "dt": 1537790400, "main": { "temp": 51.45, "temp_min": 51.45, "temp_max": 51.45, "pressure": 843.8, "sea_level": 1023.25, "grnd_level": 843.8, "humidity": 64, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "clouds": { "all": 24 }, "wind": { "speed": 6.2, "deg": 352 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-24 12:00:00" }, { "dt": 1537801200, "main": { "temp": 63, "temp_min": 63, "temp_max": 63, "pressure": 845.08, "sea_level": 1023.5, "grnd_level": 845.08, "humidity": 57, "temp_kf": 0 }, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }], "clouds": { "all": 24 }, "wind": { "speed": 5.53, "deg": 321.006 }, "sys": { "pod": "d" }, "dt_txt": "2018-09-24 15:00:00" }, { "dt": 1537812000, "main": { "temp": 73.46, "temp_min": 73.46, "temp_max": 73.46, "pressure": 844.23, "sea_level": 1020.65, "grnd_level": 844.23, "humidity": 39, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 2.57, "deg": 231.5 }, "sys": { "pod": "d" }, "dt_txt": "2018-09-24 18:00:00" }, { "dt": 1537822800, "main": { "temp": 69.78, "temp_min": 69.78, "temp_max": 69.78, "pressure": 843.32, "sea_level": 1019.53, "grnd_level": 843.32, "humidity": 37, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "clouds": { "all": 76 }, "wind": { "speed": 7.54, "deg": 254.504 }, "rain": { "3h": 0.075 }, "sys": { "pod": "d" }, "dt_txt": "2018-09-24 21:00:00" }, { "dt": 1537833600, "main": { "temp": 67.37, "temp_min": 67.37, "temp_max": 67.37, "pressure": 843.75, "sea_level": 1020.24, "grnd_level": 843.75, "humidity": 38, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "clouds": { "all": 8 }, "wind": { "speed": 4.72, "deg": 214.506 }, "rain": { "3h": 0.015 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-25 00:00:00" }, { "dt": 1537844400, "main": { "temp": 55.29, "temp_min": 55.29, "temp_max": 55.29, "pressure": 844.68, "sea_level": 1022.88, "grnd_level": 844.68, "humidity": 46, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 4.59, "deg": 251.001 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-25 03:00:00" }, { "dt": 1537855200, "main": { "temp": 48.58, "temp_min": 48.58, "temp_max": 48.58, "pressure": 845.2, "sea_level": 1025.02, "grnd_level": 845.2, "humidity": 61, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "02n" }], "clouds": { "all": 8 }, "wind": { "speed": 3.24, "deg": 257 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-25 06:00:00" }, { "dt": 1537866000, "main": { "temp": 43.51, "temp_min": 43.51, "temp_max": 43.51, "pressure": 846.76, "sea_level": 1028.61, "grnd_level": 846.76, "humidity": 67, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 5.73, "deg": 13.0046 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-25 09:00:00" }, { "dt": 1537876800, "main": { "temp": 38.62, "temp_min": 38.62, "temp_max": 38.62, "pressure": 849.75, "sea_level": 1033.64, "grnd_level": 849.75, "humidity": 63, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 7.99, "deg": 23.508 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-25 12:00:00" }, { "dt": 1537887600, "main": { "temp": 44.49, "temp_min": 44.49, "temp_max": 44.49, "pressure": 853.12, "sea_level": 1035.65, "grnd_level": 853.12, "humidity": 59, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 1.57, "deg": 278.5 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-25 15:00:00" }, { "dt": 1537898400, "main": { "temp": 52.81, "temp_min": 52.81, "temp_max": 52.81, "pressure": 852.29, "sea_level": 1032.22, "grnd_level": 852.29, "humidity": 57, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "02d" }], "clouds": { "all": 8 }, "wind": { "speed": 4.16, "deg": 105.007 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-25 18:00:00" }, { "dt": 1537909200, "main": { "temp": 57.59, "temp_min": 57.59, "temp_max": 57.59, "pressure": 850.76, "sea_level": 1029.55, "grnd_level": 850.76, "humidity": 51, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 8.66, "deg": 112 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-25 21:00:00" }, { "dt": 1537920000, "main": { "temp": 56.4, "temp_min": 56.4, "temp_max": 56.4, "pressure": 851.95, "sea_level": 1031.32, "grnd_level": 851.95, "humidity": 46, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 9.78, "deg": 93.0039 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-26 00:00:00" }, { "dt": 1537930800, "main": { "temp": 49.5, "temp_min": 49.5, "temp_max": 49.5, "pressure": 855.68, "sea_level": 1038.24, "grnd_level": 855.68, "humidity": 54, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "clouds": { "all": 100 }, "wind": { "speed": 9.31, "deg": 68.5018 }, "rain": { "3h": 0.09 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-26 03:00:00" }, { "dt": 1537941600, "main": { "temp": 45.54, "temp_min": 45.54, "temp_max": 45.54, "pressure": 857.18, "sea_level": 1042.49, "grnd_level": 857.18, "humidity": 75, "temp_kf": 0 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10n" }], "clouds": { "all": 0 }, "wind": { "speed": 1.68, "deg": 2.50397 }, "rain": { "3h": 0.48 }, "sys": { "pod": "n" }, "dt_txt": "2018-09-26 06:00:00" }, { "dt": 1537952400, "main": { "temp": 36.04, "temp_min": 36.04, "temp_max": 36.04, "pressure": 856.95, "sea_level": 1043.89, "grnd_level": 856.95, "humidity": 91, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 0.6, "deg": 113.002 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-26 09:00:00" }, { "dt": 1537963200, "main": { "temp": 31.42, "temp_min": 31.42, "temp_max": 31.42, "pressure": 856.46, "sea_level": 1044.3, "grnd_level": 856.46, "humidity": 85, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 1.25, "deg": 167.001 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-26 12:00:00" }, { "dt": 1537974000, "main": { "temp": 44.19, "temp_min": 44.19, "temp_max": 44.19, "pressure": 855.32, "sea_level": 1040.26, "grnd_level": 855.32, "humidity": 84, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.16, "deg": 248.001 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-26 15:00:00" }, { "dt": 1537984800, "main": { "temp": 60.45, "temp_min": 60.45, "temp_max": 60.45, "pressure": 853.48, "sea_level": 1033.4, "grnd_level": 853.48, "humidity": 51, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 4.97, "deg": 149 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-26 18:00:00" }, { "dt": 1537995600, "main": { "temp": 69.36, "temp_min": 69.36, "temp_max": 69.36, "pressure": 850.29, "sea_level": 1028.23, "grnd_level": 850.29, "humidity": 35, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 6.51, "deg": 168.003 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-26 21:00:00" }, { "dt": 1538006400, "main": { "temp": 69.42, "temp_min": 69.42, "temp_max": 69.42, "pressure": 848.4, "sea_level": 1026.32, "grnd_level": 848.4, "humidity": 22, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 5.93, "deg": 293.506 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-27 00:00:00" }, { "dt": 1538017200, "main": { "temp": 51.54, "temp_min": 51.54, "temp_max": 51.54, "pressure": 849.65, "sea_level": 1029.66, "grnd_level": 849.65, "humidity": 25, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 6.98, "deg": 288.002 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-27 03:00:00" }, { "dt": 1538028000, "main": { "temp": 42.12, "temp_min": 42.12, "temp_max": 42.12, "pressure": 849.31, "sea_level": 1031.39, "grnd_level": 849.31, "humidity": 57, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 3.51, "deg": 273.001 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-27 06:00:00" }, { "dt": 1538038800, "main": { "temp": 38.42, "temp_min": 38.42, "temp_max": 38.42, "pressure": 848.79, "sea_level": 1031.96, "grnd_level": 848.79, "humidity": 58, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 2.39, "deg": 245.002 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-27 09:00:00" }, { "dt": 1538049600, "main": { "temp": 36.2, "temp_min": 36.2, "temp_max": 36.2, "pressure": 848.88, "sea_level": 1032.98, "grnd_level": 848.88, "humidity": 60, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 2.62, "deg": 183 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-27 12:00:00" }, { "dt": 1538060400, "main": { "temp": 54, "temp_min": 54, "temp_max": 54, "pressure": 849.72, "sea_level": 1031.12, "grnd_level": 849.72, "humidity": 60, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 1.92, "deg": 190.501 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-27 15:00:00" }, { "dt": 1538071200, "main": { "temp": 69.6, "temp_min": 69.6, "temp_max": 69.6, "pressure": 848.95, "sea_level": 1026.68, "grnd_level": 848.95, "humidity": 30, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 6.6, "deg": 139.501 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-27 18:00:00" }, { "dt": 1538082000, "main": { "temp": 74.49, "temp_min": 74.49, "temp_max": 74.49, "pressure": 846.73, "sea_level": 1023.29, "grnd_level": 846.73, "humidity": 25, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 7.54, "deg": 156 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-27 21:00:00" }, { "dt": 1538092800, "main": { "temp": 71.56, "temp_min": 71.56, "temp_max": 71.56, "pressure": 845.96, "sea_level": 1022.76, "grnd_level": 845.96, "humidity": 25, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 3.94, "deg": 124.503 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-28 00:00:00" }, { "dt": 1538103600, "main": { "temp": 52.22, "temp_min": 52.22, "temp_max": 52.22, "pressure": 847.23, "sea_level": 1026.48, "grnd_level": 847.23, "humidity": 51, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 5.17, "deg": 74.002 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-28 03:00:00" }, { "dt": 1538114400, "main": { "temp": 43.47, "temp_min": 43.47, "temp_max": 43.47, "pressure": 847.22, "sea_level": 1028.6, "grnd_level": 847.22, "humidity": 56, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 3.62, "deg": 319.5 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-28 06:00:00" }, { "dt": 1538125200, "main": { "temp": 39.25, "temp_min": 39.25, "temp_max": 39.25, "pressure": 846.9, "sea_level": 1029.62, "grnd_level": 846.9, "humidity": 65, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 0.72, "deg": 277.5 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-28 09:00:00" }, { "dt": 1538136000, "main": { "temp": 36.25, "temp_min": 36.25, "temp_max": 36.25, "pressure": 846.98, "sea_level": 1030.81, "grnd_level": 846.98, "humidity": 65, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "clouds": { "all": 0 }, "wind": { "speed": 2.13, "deg": 189.503 }, "rain": {}, "sys": { "pod": "n" }, "dt_txt": "2018-09-28 12:00:00" }, { "dt": 1538146800, "main": { "temp": 54.45, "temp_min": 54.45, "temp_max": 54.45, "pressure": 847.78, "sea_level": 1029.05, "grnd_level": 847.78, "humidity": 56, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 3.06, "deg": 212.5 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-28 15:00:00" }, { "dt": 1538157600, "main": { "temp": 74.81, "temp_min": 74.81, "temp_max": 74.81, "pressure": 847.21, "sea_level": 1024.67, "grnd_level": 847.21, "humidity": 27, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 0.58, "deg": 111.501 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-28 18:00:00" }, { "dt": 1538168400, "main": { "temp": 79.8, "temp_min": 79.8, "temp_max": 79.8, "pressure": 845.61, "sea_level": 1021.99, "grnd_level": 845.61, "humidity": 20, "temp_kf": 0 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01d" }], "clouds": { "all": 0 }, "wind": { "speed": 1.92, "deg": 284.501 }, "rain": {}, "sys": { "pod": "d" }, "dt_txt": "2018-09-28 21:00:00" }], "city": { "id": 420006373, "name": "Broomfield", "coord": { "lat": 40.0536, "lon": -105.0748 }, "country": "US" } }

    fetchMock.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${location}&appid=${api_key}&units=imperial&cnt=40`,
      JSON.stringify(mockWeather)
    ).catch()
  }

  it('renders app', () => {
    expect(shallowWrapper.find('div.App')).toHaveLength(1);
  });

  it('renders a forecast-container', () => {
    expect(shallowWrapper.find('section.forecast-container')).toHaveLength(1);
  });

  it('mount renders an input', () => {
    let mountWrapper = mount(<App />);

    expect(mountWrapper.find('input')).toHaveLength(1);
  });

  it('should have initial state', () => {
    let state = {
      city: {},
      weather: {},
      fiveDay: []
    };

    expect(shallowWrapper.state()).toEqual(state);
  });

  it('splitDays fn should create weather state', () => {

    let weather = shallowWrapper.instance().splitDays(list);

    shallowWrapper.setState({ weather });

    expect(shallowWrapper.state().weather).toEqual(weatherState);
  });

  it('should call cleanTime function when splitDays is called', () => {
    let dt = 1538157600 * 1000;

    let expectedState = {
      date: '9/28',
      time: '12:00am'
    };

    let mst = new Date(dt);

    let newTime = shallowWrapper.instance().cleanTime(mst);

    expect(newTime).toEqual(expectedState);
  });

  it('should calculate daily temps', () => {
    shallowWrapper.setState({ weather: weatherState });
    shallowWrapper.instance().calculateDailyTemps();

    expect(shallowWrapper.state().fiveDay).toEqual(fiveDay);
  });
});


