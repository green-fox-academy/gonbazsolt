'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

const forecasts = [
  {
    city: 'Seattle',
    location: 'Washington, United States',
    weather: [
      { temp: 11, icon: 'cloudy', message: 'Complete Grey' },
      { temp: 11, icon: 'cloudy', message: 'Just stay in bed.' },
      { temp: 13, icon: 'cloudy', message: 'Meh...' },
      { temp: 12, icon: 'cloudy', message: 'Still meh...' },
      { temp: 13, icon: 'partly_cloudy', message: 'Not too sunny.' },
    ],
  },
  {
    city: 'Miami',
    location: 'Florida, United States',
    weather: [
      { temp: 33, icon: 'sunny', message: 'Hot.' },
      { temp: 35, icon: 'sunny', message: 'Too hot!' },
      { temp: 34, icon: 'sunny', message: 'Sunny.' },
      { temp: 34, icon: 'sunny', message: 'Beach time!' },
      { temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [
      { temp: 19, icon: 'sunny', message: 'Sunny.' },
      { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 17, icon: 'sunny', message: 'So far so good.' },
      { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
      { temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [
      { temp: 4, icon: 'snowy', message: 'Go home winter.' },
      { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },
      { temp: 10, icon: 'rainy', message: 'It\'s rainy.' },
      { temp: 9, icon: 'rainy', message: 'Meh...' },
      { temp: 11, icon: 'rainy', message: 'Meh... Again.' },
    ],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
    ],
  },
];

const cityIndex = ['Seattle', 'Miami', 'Barcelona', 'London', 'Budapest'];

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {

  res.render('home', {
    forecasts: forecasts
  });
});

app.get('/:anything', (req, res) => {

  res.render('home', {
    forecasts: forecasts
  });
});

app.get('/cities/:city', (req, res) => {
  let cityForecast = {};
  let indexOfCity;
  let prevCity;
  let nextCity;

  indexOfCity = cityIndex.indexOf(req.params.city);

  if (indexOfCity !== -1) {
    cityForecast.city = forecasts[indexOfCity].city;
    cityForecast.location = forecasts[indexOfCity].location;
    cityForecast.weather = forecasts[indexOfCity].weather;
    if (indexOfCity === 0) {
      prevCity = forecasts[4].city;
      nextCity = forecasts[1].city;
    } else if (indexOfCity === 4) {
      prevCity = forecasts[3].city;
      nextCity = forecasts[0].city;
    } else {
      prevCity = forecasts[indexOfCity - 1].city;
      nextCity = forecasts[indexOfCity + 1].city;
    }

    res.render('city', {
      forecast: cityForecast,
      prevCity: prevCity,
      nextCity: nextCity
    });
  } else {
    res.render('home', {
      forecasts: forecasts
  
    });
  }
});

app.listen(PORT, () => {
  console.log(`Yey, I'm running on port ${PORT}`);
});
