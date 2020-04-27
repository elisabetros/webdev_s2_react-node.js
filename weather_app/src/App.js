import React, { Component } from 'react';
import Axios from 'axios';
import keys from './config.json';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Search from './components/search/Search';
import WeatherNow from './pages/weatherNow/WeatherNow';
import Forecast from './pages/forecast/Forecast';
import Loader from './components/loader/Loader';

class App extends Component{
  state = {
    city : "Copenhagen",
    temp : "",
    desc: "",
    main: "",
    humidity:"",
    wind: "",
    iconUrl: "",
    feelsLike:"",
    isLoading:true
  }
 
  async componentDidMount () {
    this.fetchWeatherData(this.state.city)
  }
 
 fetchWeatherData = (city) => {
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${keys.weather}&units=metric`)
    .then(res => {
      console.log('weather', res.data)
      let iconUrl = "https://openweathermap.org/img/wn/" + res.data.weather[0].icon + "@2x.png";

      this.setState({
        desc:res.data.weather[0].description,
        temp:res.data.main.temp,
        main:res.data.weather[0].main,
        humidity:res.data.main.humidity,
        wind:res.data.wind.speed,
        iconUrl : iconUrl,
        feelsLike: res.data.main.feels_like,
        isLoading:false
      })
    })
  }

onSearch = (city) => {
    this.setState({city})
    this.fetchWeatherData(city)
  }

isLoading = () =>{
  if(this.state.isLoading){
    return <Loader/>
  }
}

  render () {
    const { temp, desc, city, iconUrl, main, wind, humidity, feelsLike } = this.state;
    return (
      <Router>
      {this.isLoading()}
      <div className="app">
        <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" exact to="/weatherapp">Today</NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/weatherapp/forecast">5 Day Forecast</NavLink>
              </li>
              <Search handleSearchData={this.onSearch}/> 
            </ul>
          </nav>
        <Switch>
          <Route exact path="/weatherapp"
            component={(props)=>
              <WeatherNow  {...props} iconUrl={iconUrl} wind={wind} main={main} feelsLike={feelsLike} city={city} temp={temp} humidity={humidity} desc={desc} />
            }/>
         <Route path="/weatherapp/forecast"
         component={ (props) => 
            <Forecast {...props} city={city} />
           }/>
        </Switch>
                
      </div>
        </Router>
    );
  }
}

export default App;
