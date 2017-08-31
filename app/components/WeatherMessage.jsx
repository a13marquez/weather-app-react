var React = require('react');


var WeatherMessage = ({weather, location}) => {
  debugger;
  return (
    <div>
    <h3 className="text-center">Weather in {location}.</h3>

      <h3 className="text-center">It's it {weather.temp}C.</h3>
      <h3 className="text-center">The humidity is {weather.humidity}%.</h3>

    </div>
  )
}

module.exports = WeatherMessage;
