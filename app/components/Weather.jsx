import React, { Component, PropTypes} from 'react';
import WeatherForm  from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';


class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      props
    };
     this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (location) {
    var self = this;
    this.setState ({
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
      self.state = {
        isLoading:false,
        errorMessage: e.message
      };
    })
  }

  componentDidMount (){
    var location = this.props.query ? this.props.location.query.location : '';
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps(newProps){
    var location = newProps ? newProps.location.query.location : '';

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/'
    }
  }

  render () {
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
          <div>
            { errorMessage }
          </div>
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
}



module.exports = Weather;
