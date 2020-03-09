import React, { Component } from "react";
import { WiStrongWind as Wind} from 'react-icons/wi';
import { WiHumidity as Humidity} from 'react-icons/wi';
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';
import {WiThunderstorm as Thunderstorm } from 'react-icons/wi';
import {WiShowers as Drizzle } from 'react-icons/wi';
import {WiFog as Other } from 'react-icons/wi';
import {WiThermometer as Thermometer } from 'react-icons/wi';



export default class WeatherNow extends Component{
    displayWeatherIcon = (main) => {
        let WeatherIcon;
        switch(main) {
          case 'Clouds':
            WeatherIcon = <Clouds className="mainIcon"/>
            break;
          case 'Clear':
            WeatherIcon = <Sun className="mainIcon"/>;
            break;
          case 'Rain':
            WeatherIcon= <Rain className="mainIcon"/>
            break;
          case 'Snow':
            WeatherIcon = <Snow className="mainIcon"/>
            break;
          case 'Drizzle':
            WeatherIcon = <Drizzle className="mainIcon"/>;
            break;
          case 'Thunderstorm':
            WeatherIcon = <Thunderstorm className="mainIcon"/>
            break;
          default:
            WeatherIcon = <Other className="mainIcon"/>
          }
          return WeatherIcon;
      }
    render () {
        const { temp, desc, city, main, feelsLike, humidity, wind } = this.props
        // console.log(main)
        return(
            <div className="currentWeather">
                    <h1>{city}</h1>
                { this.displayWeatherIcon(main) }
                <div className="currentMainText">
                    <h2 className="temp">{temp} °C</h2>
                    <p>{desc}</p>

                </div>

                <div className="currentWeatherItems">
                    <div>
                      <Thermometer className="currIcon"/>
                       <p> Feels like</p>
                        <h3 className="temp">{feelsLike} °C</h3>
                    </div>
                    <div>
                        <Wind className="currIcon"/>
                        <p>Wind</p>
                        <h3>{wind}</h3>
                    </div>
                    <div>
                      <Humidity className="currIcon"/>
                        <p>Humidity</p>
                        <h3>{humidity}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
