import React, { Component } from "react";

export default class WeatherNow extends Component{
  
    render(){
        const {  temp, desc, city, humidity } = this.props
        // console.log(weatherData)
        return(
            <div>
                <h1>Weather now in {city} </h1>
                <p>{temp} °C</p>
                <p>{desc}</p>
                <p>humidity: {humidity}</p>
            </div>
        )
    }
}
