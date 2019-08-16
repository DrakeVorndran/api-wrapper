# Clean Openweathermap api wrapper
this wrapper adds a function that gives you a data structure that is a little easier to work with

# Usage
```js
const getCleanWeather = require('../index')
```

# getCleanWeather(zip)
the get clean weather function takes in 1 paramater, which is the zip code of the location you would like to see the current weather of and returns a promise. The promise has one response value which is the better looking data structure
```js
getCleanWeather('94109').then(res => /*do stuff*/)
```
The response looks something like this
```js
{ description: 'haze',
  tempature: 84,
  humidity: 72,
  wind: { speed: 4.1, direction: 270 },
  sun:
   { sunrise: 2019-08-15T13:25:10.000Z,
     sunset: 2019-08-16T03:03:26.000Z },
  location: 'San Francisco' }
```

The `sunrise` and `sunset` values are date objects, the rest is either string or numbers.
The `tempature` is in fahrenheit, and the wind `speed` is in knots. The wind `direction` is in degrees