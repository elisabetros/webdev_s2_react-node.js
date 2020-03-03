import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
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
    const res = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${apiKey}&units=metric`)
    console.log(res)
    let iconUrl = "http://openweathermap.org/img/wn/" + res.data.weather[0].icon+ "@2x.png";

    if(this._isMounted){
      this.setState({desc:res.data.weather[0].description,
        temp:res.data.main.temp,
        main:res.data.weather[0].main,
        humidity:res.data.main.humidity,
        wind:res.data.wind.speed,
        iconUrl : iconUrl,
        feelsLike: res.data.main.feels_like,
        isLoading:false})
    }
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

// fetchForecastData =  (city) => {
//   Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`)
//   .then(res => {
//     console.log("forecast", res.data)
//     let forecastData = res.data.list
//     forecastData.forEach(forecast => {
//       let joined = this.state.forecastList.concat(forecast)
//       this.setState({forecastList:joined})
//     });
//     console.log(forecastData)
//   })

// }
// unix.textContent=Math.round(Date.parse(event.target.value)/1000);

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
      <div className="app">
          
        {this.isLoading()}
        <Switch>
          <Route exact path="/"
            component={(props)=>
              <div>
                <WeatherNow  {...props} iconUrl={iconUrl} wind={wind} main={main} feelsLike={feelsLike} city={city} temp={temp} humidity={humidity} desc={desc} />
            </div>
            }/>
         <Route path="/forecast"
         component={ (props) => 
            <div>
              <Forecast {...props} city={city} forecastList={forecastList} fetchForecastData={this.fetchForecastData} />
            </div>}/>
        </Switch>
        <nav>
            <ul>
              <li>
                <Link to="/">Today</Link>
              </li>
              <li>
                <Link to="/forecast">5 Day Forecast</Link>
              </li>
              <Search handleSearchData={this.onSearch}/> 
            </ul>
          </nav>
         
      </div>
        </Router>
    );
  }
}

export default App;
