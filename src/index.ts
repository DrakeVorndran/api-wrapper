const request = require("request")
const rpn = require('request-promise-native');

function getCleanWeather(zip: string) {
  interface data {
    description: string
    tempature: number
    humidity: number
    wind: {
      speed: number
      direction: number
    }
    sun: {
      sunrise: Date
      sunset: Date
    }
    location: string
  }

  interface angryData {
    coord: { lon: number, lat: number },
  weather:
   [ { id: number, main: string, description: string, icon: string } ],
  base: string,
  main:
   { temp: number,
     pressure: number,
     humidity: number,
     temp_min: number,
     temp_max: number },
  visibility: number,
  wind: { speed: number, deg: number },
  clouds: { all: number },
  dt: number,
  sys:
   { type: number,
     id: number,
     message: number,
     country: string,
     sunrise: number,
     sunset: number },
  timezone: number,
  id: number,
  name: string,
  cod: number }

  const apikey: string = "7602bf22c280996719107d67a1026fd0"
  const url: string = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
  return (rpn(url).then(res => {
    let badData: angryData = JSON.parse(res)
    let goodData: data = {
      description: badData.weather[0].description,
      tempature: Math.round((badData.main.temp - 273.15) * 9/5 + 32),
      humidity: badData.main.humidity,
      wind: {speed: badData.wind.speed, direction: badData.wind.deg},
      sun: {
        sunrise: new Date(badData.sys.sunrise * 1000),
        sunset: new Date(badData.sys.sunset * 1000),
      },
      location: badData.name,
    }
    return goodData
  }).catch(err => console.log(err)))

}


module.exports = getCleanWeather


