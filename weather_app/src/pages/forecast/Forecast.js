import React, { Component } from "react";
import Axios from 'axios';
import keys from './../../config.json';
import SingleForecast from "./SingleForecast";
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';
import {WiThunderstorm as Thunderstorm } from 'react-icons/wi';
import {WiShowers as Drizzle } from 'react-icons/wi';
import {WiFog as Other } from 'react-icons/wi';

export default class Forecast extends Component{
  state = {
    forecastList : [],
    isLoading : true
  }

   async componentDidMount () {
    const res = await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&APPID=${keys.weather}&units=metric`)
    const fiveDayForecast = res.data.list.filter((forecast, index) => {
      if(index % 8===0){
        return forecast
      }
    })
    this.setState({forecastList:fiveDayForecast, isLoading:false})
    }

    displayWeatherIcon = (main) => {
      let WeatherIcon;
      switch(main){
        case 'Clouds':
          WeatherIcon = <Clouds className="icon"/>
          break;
        case 'Clear':
          WeatherIcon = <Sun className="icon"/>
          break;
        case 'Rain':
          WeatherIcon= <Rain className="icon"/>
          break;
        case 'Snow':
          WeatherIcon = <Snow className="icon"/>
          break;
        case 'Drizzle':
          WeatherIcon = <Drizzle className="icon"/>
          break;
        case 'Thunderstorm':
          WeatherIcon = <Thunderstorm className="icon"/>
          break;
        default:
          WeatherIcon = <Other className="icon"/>
        }
        return WeatherIcon;
    }
   
  convertDate= (date) => {
    let unixDate = date;        
    let dateObj = new Date(unixDate * 1000);
    let dateStr = dateObj.toDateString();
    let weekday = dateStr.slice(0,3);
    return weekday;
}
    render() {
        const { city } = this.props
        const {forecastList } = this.state
        return(
            <div className="fiveDayForecast">
                <h1>{city}</h1>
                <h2>5 day forecast</h2>
                <div className="forecastList">
                  {forecastList.map( (forecast, index) => {  
                  return  <SingleForecast key={"forecast"+ index}  forecast={forecast} />})}
                 </div>
            </div>
        )
    }
}