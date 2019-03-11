import React, { Component } from 'react';

import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Wheater'

const API_KEY = 'b9c69455dbb3239dc4e101921f2b9e60';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    presurre: undefined,
    description: undefined,
    error: undefined,
}
  }
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
   const data = await api_call.json();
  
   if(city && country){
    this.setState({
     temperature: data.main.temp,
     city: data.name,
     country: data.sys.country,
     humidity: data.main.humidity,
     pressure: data.main.pressure,
     description: data.weather[0].description,
     error: ''
    });
  }else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      pressure: undefined,
      description: undefined,
      error: 'Enter your value'
     });
  }
}
  render() {
    return (
      <div className="container">
        <div className="wrapper">
            <div className="title">
              <Titles />
              </div>
              <div className="form">
              <Form getWeather={this.getWeather} />
              <div className="info">
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              description={this.state.description}
              error={this.state.error}
              />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



      