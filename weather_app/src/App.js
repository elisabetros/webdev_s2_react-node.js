import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';
import Search from './components/search/Search';
import WeatherNow from './pages/weatherNow/WeatherNow';
import Forecast from './pages/forecast/Forecast';
import Loader from './components/loader/Loader';

const apiKey = "949fc69ba12a1ed41083b08fc8a2634b";

class App extends Component{
  _isMounted = false;
  state = {
    city : "Copenhagen",
    temp : "",
    desc: "",
    main: "",
    humidity:"",
    wind: "",
    iconUrl: "",
    feelsLike:"",
    forecastList:[],
    isLoading:true
  }
 
  async componentDidMount(){
    this._isMounted = true;
    this.fetchWeatherData(this.state.city)
    // const res = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${apiKey}&units=metric`)
    
    // this.fetchWeatherData(this.state.city)
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
 
 fetchWeatherData =  (city)=> {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
    .then(res => {
      console.log('weather', res.data)
      let iconUrl = "http://openweathermap.org/img/wn/" + res.data.weather[0].icon+ "@2x.png";

      this.setState({
        desc:res.data.weather[0].description,
        temp:res.data.main.temp,
        main:res.data.weather[0].main,
        humidity:res.data.main.humidity,
        wind:res.data.wind.speed,
        iconUrl : iconUrl,
        feelsLike: res.data.main.feels_like,
      isLoading:false})
    })
  }

onSearch = (city)=>{
    this.setState({city})
    this.fetchWeatherData(city)
  }

isLoading = () =>{
  if(this.state.isLoading){
    return <Loader/>
  }
}

  render() {
    const { temp, desc, city, iconUrl, main, wind, humidity, feelsLike, forecastList } = this.state;
    return (
      <Router>
      {this.isLoading()}
      <div className="app">
      <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" exact to="/">Today</NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/forecast">5 Day Forecast</NavLink>
              </li>
              <Search handleSearchData={this.onSearch}/> 
            </ul>
          </nav>
        <Switch>
          <Route exact path="/"
            component={(props)=>
              <WeatherNow  {...props} iconUrl={iconUrl} wind={wind} main={main} feelsLike={feelsLike} city={city} temp={temp} humidity={humidity} desc={desc} />
            }/>
         <Route path="/forecast"
         component={ (props) => 
            <Forecast {...props} city={city} forecastList={forecastList} fetchForecastData={this.fetchForecastData} />
           }/>
        </Switch>
       
         
      </div>
        </Router>
    );
  }
}

export default App;
