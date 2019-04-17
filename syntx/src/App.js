import React, { Component } from 'react';
import SearchCity from './Components/SearchCity';
import SearchZip from './Components/SearchZip';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     SearchCity: true,
    };
    this.switchSearch = this.switchSearch.bind(this);
  }

  switchSearch(){
    var currentState = this.state.SearchCity;
    this.setState({SearchCity: !currentState})
  }

  render() {
    return (
      <div className="App">
        <div className="Search">
            {this.state.SearchCity?<SearchCity/> : <SearchZip/>}
        </div>
        <div className ="switchBtn">
           <div>
              <p onClick = {this.switchSearch}>Switch </p>
           </div>
        </div>
      </div>
    );
  }
}

export default App;
