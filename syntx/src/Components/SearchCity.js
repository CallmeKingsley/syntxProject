import React, { Component } from 'react';
import '../App'


class CityNameSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchWeatherWithCityName = this.searchWeatherWithCityName.bind(this);
  }

  searchWeatherWithCityName(){

  }

  handleChange(e) {
    this.setState({cityName: e.target.value});
  }

  render() {
    return (
      <div>
      <p>Search for forecast with <b>City Name</b></p>
        <div className = "searchCityName">
            <input  className = "searchbar"  onChange={this.handleChange} value={this.state.cityName}/>
            <input  className = "searchbtn" type="submit" onChange={this.searchWeatherWithZipCode} value="Search"/>
        </div>
      </div>
    );
  }
}
export default CityNameSearch;