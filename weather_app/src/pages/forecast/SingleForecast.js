import React, { Component } from "react";
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';
import {WiThunderstorm as Thunderstorm } from 'react-icons/wi';
import {WiShowers as Drizzle } from 'react-icons/wi';
import {WiFog as Other } from 'react-icons/wi';



export default class SingleForecast extends Component {
    convertDate= (date) => {
        let unixDate = date;        
        let dateObj = new Date(unixDate * 1000);
        let dateStr = dateObj.toDateString();
        let weekday = dateStr.slice(0,3);
        return weekday;
    }
    DisplayIcon = (main) => {
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
    render() {
        const { forecast } = this.props;
        return(
            <div className="forecast">
                <h2 >{this.convertDate(forecast.dt)}</h2>
                        <p> {forecast.weather[0].description}</p>
                        {this.DisplayIcon(forecast.weather[0].main)}
                        <h3>{forecast.main.temp} °C</h3>
                        <p>Wind: {forecast.wind.speed} m/s</p>
            </div>
        )
    }
}