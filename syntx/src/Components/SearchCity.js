import React, { Component } from 'react';
import DisplayForecase from '../Components/DisplayForecast';
import '../App'


class CityNameSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
      Data:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchWeatherWithCityName = this.searchWeatherWithCityName.bind(this);
  }

  searchWeatherWithCityName(){
    fetch("http://localhost:5000/syntx/getForecastInfoWithName", {
        method: "POST",
        headers: {
            Action: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cityName: this.state.cityName
        })
        }).then(response => {
            return response.text();
        }).then(responseData => {
            this.setState({Data: JSON.parse(responseData)})
            console.log(JSON.parse(responseData))
        })
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
            <input  className = "searchbtn" type="submit" onClick={this.searchWeatherWithCityName} value="Search"/>
        </div>
        <div className = "display">
          {this.state.Data.map((Data,index)=>{
            return(<DisplayForecase key ={index} Data ={Data}/>)
          })}
        </div>
      </div>
    );
  }
}
export default CityNameSearch;