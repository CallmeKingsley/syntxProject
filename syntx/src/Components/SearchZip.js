import React, { Component } from 'react';
import DisplayForecase from '../Components/DisplayForecast';
import '../App'


class ZipCodeSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      ZipCode: '',
      Data:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchWeatherWithZipCode = this.searchWeatherWithZipCode.bind(this);
  }

  searchWeatherWithZipCode(){
      fetch("http://localhost:5000/syntx/retrievewithZipCode", {
      method: "POST",
      headers: {
          Action: "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        zipCode: this.state.ZipCode
      })
      }).then(response => {
          return response.text();
      }).then(responseData => {
        console.log(JSON.parse(responseData))
        this.setState({Data: JSON.parse(responseData)})
      })
      console.log(this.state.Data)
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
            <input  className = "searchbtn" type="submit" onClick={this.searchWeatherWithZipCode} value="Search"/>
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
export default ZipCodeSearch;