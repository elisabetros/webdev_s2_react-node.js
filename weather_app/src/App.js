import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './components/search/Search';
import WeatherNow from './pages/weatherNow/WeatherNow';
import Forecast from './pages/forecast/Forecast';

const apiKey = "949fc69ba12a1ed41083b08fc8a2634b";

class App extends Component{
  state = {
    city : "Copenhagen",
    temp : "",
    desc: "",
    main: "",
    humidity:"",
    forecastList:[]
  }
 
  componentDidMount(){
    this.fetchWeatherData(this.state.city)
    this.fetchForecastData(this.state.city)
    
  }
 fetchWeatherData = async (city)=> {
    Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`)
    .then(res => {
      console.log('weather', res.data)
      this.setState({
        desc:res.data.weather[0].description,
        temp:res.data.main.temp,
        main:res.data.weather[0].main,
        humidity:res.data.main.humidity})
    })
  }

fetchForecastData = async (city) => {
  Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`)
  .then(res => {
    console.log("forecast", res.data)
    let forecastData = res.data.list
    forecastData.forEach(forecast => {
      let joined = this.state.forecastList.concat(forecast)
      this.setState({forecastList:joined})
    });
    console.log(forecastData)
  })

}
// unix.textContent=Math.round(Date.parse(event.target.value)/1000);

onSearch = (city)=>{
    this.setState({city})
    this.fetchWeatherData(city)
  }

  render() {
    const { temp, desc, city, humidity, forecastList } = this.state;
    return (
        <Router>
      <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/forecast">5 Day Forecast</Link>
              </li>
            </ul>
          </nav>

<Search />
        <Switch>
          <Route exact path="/"
            component={(props)=>
              <div>
                <Search handleSearchData={this.onSearch} setFetchFromChild={this.fetchForecastData}/>
                <WeatherNow  {...props} city={city} temp={temp} humidity={humidity} desc={desc} />
            </div>
            }/>
         <Route path="/forecast"
         component={ (props) => 
            <div>
              {/* <Search handleSearchData={this.onSearchForecast}/> */}
              <Forecast {...props} city={city} forecastList={forecastList} />
            </div>}/>
        </Switch>

         
      </div>
        </Router>
    );
  }
}

export default App;
