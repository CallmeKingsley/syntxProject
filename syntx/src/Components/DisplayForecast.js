import React, { Component } from 'react';
import '../Components/css/weather-icons.css'
import moment from 'moment'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  this.retrieveWeatherIcon = this.retrieveWeatherIcon.bind(this)
  }

  retrieveWeatherIcon(weatherState){
    var iconType;

    switch(weatherState){
      case "Heavy Rain":
      iconType = "wi wi-rain-mix";
      break;
      case "Clear":
      iconType = "wi wi-day-sunny";
      break;
      case  "Light Cloud":
      iconType = "wi wi-cloudy";
      break;
      case "Showers":
      iconType = "wi wi-day-showers";
      break;
      case "Light Rain":
      iconType = "wi wi-rain";
      break;
      case "Snow":
      iconType = "wi wi-snow";
      break;
      default:
      iconType = "wi wi-night-partly-cloudy";
    }
    return iconType;
  }
  
  render() {
    return (
      <div className="App">
       
        <h6 >{moment(this.props.Data.applicable_date).format("ddd Do")}</h6>
        <h5>{this.props.Data.weather_state_name}<i className={this.retrieveWeatherIcon(this.props.Data.weather_state_name)}></i></h5>
        <h5>{"Max :"}{this.props.Data.max_temp}</h5>
        <h5>{"Min :"}{this.props.Data.min_temp}</h5>
        <h5>{"Humidity :"}{this.props.Data.humidity}</h5>
      </div>
    );
  }
}

export default App;