var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErroModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function (location) {
    var self = this;
    this.setState({
      isLoading:true,
      errorMessage: null,
      location: null,
      weather: null
     });
    openWeatherMap.getTemp(location).then(function(weather){
      self.setState({
        location: location,
        weather: weather,
        isLoading: false
      });
    }, function(e){

      self.setState({
        isLoading:false,
        errorMessage: e.message
      });
    })

  },
  componentDidMount: function (){
    var location = this.props.query ? this.props.location.query.location : '';
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '/'
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '/'
    }
  },
  render: function () {
    var {isLoading, weather, location, errorMessage} = this.state;
    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching data</h3>
      } else if (weather && location) {
        return <WeatherMessage weather={weather} location={location}/>
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string'){
        return(
          <ErroModal message={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
