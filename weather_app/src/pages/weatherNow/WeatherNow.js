import React, { Component } from "react";
import { WiStrongWind as Wind} from 'react-icons/wi';
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';

export default class WeatherNow extends Component{
    displayWeatherIcon = ()=>{
        let WeatherIcon;
        const weatherTypeArray = ['Clouds', 'Sun', 'Rain', 'Snow']
        const weatherComponentArray = [<Clouds/>, <Sun/>, <Rain/>, <Snow/>]
        if(this.props.main){
            if(weatherTypeArray.includes(this.props.main)){
                console.log(weatherTypeArray.indexOf(this.props.main))
                WeatherIcon = weatherComponentArray[weatherTypeArray.indexOf(this.props.main)];
                return WeatherIcon;
        }
    }
    }
    render() {
        const { temp, desc, city, main, iconUrl, feelsLike, humidity, wind } = this.props
        console.log(main)
        return(
            <div className="currentWeather">
                    <h1>{city}</h1>
                {this.displayWeatherIcon()}
                <div>
                    <h2 className="temp">{temp} °C</h2>
                    <p>{desc}</p>

                </div>

                <div className="currentWeatherItems">
                    <div>
                       <p> Feels like:</p>
                        <h3 className="temp">{feelsLike} °C</h3>
                    </div>
                    <div>
                        {/* <Wind/> */}
                        <p>Wind: </p>
                        <h3>{wind}</h3>
                    </div>
                    <div>
                        <p>Humidity:</p>
                        <h3>{humidity}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
