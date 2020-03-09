import React, { Component } from "react";
import Axios from 'axios';
import keys from './../../config.json';
import SingleForecast from "./SingleForecast";
// import { WiStrongWind as Wind} from 'react-icons/wi';
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';
import {WiThunderstorm as Thunderstorm } from 'react-icons/wi';
import {WiShowers as Drizzle } from 'react-icons/wi';
import {WiFog as Other } from 'react-icons/wi';
// const apiKey = require("apikeys.json")

// import Loader from "../../components/loader/Loader";
// console.log(keys.weather)

export default class Forecast extends Component{
  state = {
    forecastList : [],
    isLoading : true
  }

   async componentDidMount(){
    const res = await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&APPID=${keys.weather}&units=metric`)
    const fiveDayForecast = res.data.list.filter( (forecast, index) => {
      if(index % 8===0){
        return forecast
      }
    })
    this.setState({forecastList:fiveDayForecast, isLoading:false})
    }

    testDisplay = (main) => {
      let WeatherIcon;
      switch(main){
        case 'Clouds':
          WeatherIcon = <Clouds className="icon"/>
          break;
        case 'Clear':
          WeatherIcon = <Sun className="icon"/>;
          break;
        case 'Rain':
          WeatherIcon= <Rain className="icon"/>
          break;
        case 'Snow':
          WeatherIcon = <Snow className="icon"/>
          break;
        case 'Drizzle':
          WeatherIcon = <Drizzle className="icon"/>;
          break;
        case 'Thunderstorm':
          WeatherIcon = <Thunderstorm className="icon"/>
          break;
        default:
          WeatherIcon = <Other className="icon"/>
        }
        return WeatherIcon;
    }
    displayWeatherIcon = (main) => {
      let WeatherIcon;      
      const weatherTypeArray = ['Clouds', 'Clear', 'Rain', 'Snow', 'Drizzle', 'Thunderstorm']
      const weatherComponentObj = {Clouds:<Clouds className="icon"/>,
      Clear: <Sun className="icon"/>,
      Rain:<Rain className="icon"/>,
      Snow:<Snow className="icon"/>, 
      Drizzle:<Drizzle className="icon"/>,
      Thunderstorm:<Thunderstorm className="icon"/>}
      // console.log(main)
          if(weatherTypeArray.includes(main)){
              // console.log(weatherComponentObj[main])
              WeatherIcon = weatherComponentObj[main];
              return WeatherIcon;
      }else
      return <Other/>
  }
  
  convertDate= (date) => {
    let unixDate = date;        
    let dateObj = new Date(unixDate * 1000);
    let dateStr = dateObj.toDateString();
    let weekday = dateStr.slice(0,3);
    return weekday;
}
  display5DayForecast = () => {
        const { forecastList } = this.state
        let forecastArray = forecastList.map((forecast,index)=>{
              let iconUrl = this.testDisplay(forecast.weather[0].main);
              return(  <div key={forecast.dt_txt} className="forecast">
                        <h2 >{this.convertDate(forecast.dt)}</h2>
                        <p> {forecast.weather[0].description}</p>
                        {iconUrl}
                        <h3>{forecast.main.temp} °C</h3>
                        <p>Wind: {forecast.wind.speed} m/s</p>
                        </div>
            )        
        })
        return forecastArray
    }

    render() {
        const { city } = this.props
        const {forecastList } = this.state
        return(
            <div className="fiveDayForecast">
                <h1>{city}</h1>
                <h2>5 day forecast</h2>
                <div className="forecastList">
                  {forecastList.map((forecast,index)=>{  
                  return  <SingleForecast key={"forecast"+ index}  forecast={forecast} />})}
                  {/* {this.display5DayForecast()} */}
                 </div>
            </div>
        )
    }
}