var request = require("request");
var rpn = require('request-promise-native');
function getCleanWeather(zip) {
    var apikey = "7602bf22c280996719107d67a1026fd0";
    var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + apikey;
    return (rpn(url).then(function (res) {
        var badData = JSON.parse(res);
        var goodData = {
            description: badData.weather[0].description,
            tempature: Math.round((badData.main.temp - 273.15) * 9 / 5 + 32),
            humidity: badData.main.humidity,
            wind: { speed: badData.wind.speed, direction: badData.wind.deg },
            sun: {
                sunrise: new Date(badData.sys.sunrise * 1000),
                sunset: new Date(badData.sys.sunset * 1000)
            },
            location: badData.name
        };
        return goodData;
    })["catch"](function (err) { return console.log(err); }));
}
module.exports = getCleanWeather;
