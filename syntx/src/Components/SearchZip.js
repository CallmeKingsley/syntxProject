import React, { Component } from 'react';
import '../App'


class ZipCodeSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      ZipCode: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchWeatherWithZipCode = this.searchWeatherWithZipCode.bind(this);
  }

  searchWeatherWithZipCode(){

  }

  handleChange(e) {
    this.setState({ZipCode: e.target.value});
  }

  render() {
    return (
      <div>
      <p>Search for forecast with <b>Zip Code</b></p>
        <div className = "searchCityName">
            <input  className = "searchbar"  onChange={this.handleChange} value={this.state.ZipCode}/>
            <input  className = "searchbtn" type="submit" onChange={this.searchWeatherWithZipCode} value="Search"/>
        </div>
      </div>
    );
  }
}
export default ZipCodeSearch;