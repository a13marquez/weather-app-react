import React, { Component } from 'react';
import { FormGroup, FormControl, Column } from 'react-bootstrap'


class WeatherForm extends Component{
  constructor(props){
    super(props);

  }
  onFormSubmit (e) {
    e.preventDefault();
    var location = this.input.value;
    if (location.length > 0) {
      this.input.value = '';
      this.props.onSearch(location);
    }
  };
  render() {
    return (
        <div>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <FormGroup>
              <FormControl type="text" inputRef={ref => { this.input = ref; }} placeholder="Search weather by city" />
            </FormGroup>
            <button className="button expanded hollow">Get Weather</button>
          </form>
        </div>
    );
  };

}



module.exports = WeatherForm;
