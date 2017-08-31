var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fda8e944f344f2d8bd9348f208f69e77&units=metric';

function getTemp (location){
  var encodedLocation = encodeURIComponent(location)
  var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation }`;

  return axios.get(requestUrl).then(function(res){
    if(res.data.cod && res.data.message){
      throw new Error(res.data.message);
    } else {
      return res.data.main;
    }
  }, function(err){
    throw new Error('Unable to fetch for that location.');
  });
}

module.exports = {
  getTemp: getTemp
}
