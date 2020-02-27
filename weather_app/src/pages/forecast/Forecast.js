import React, { Component } from "react";
import Search from "../../components/search/Search";
// import Search from '/';


export default class Forecast extends Component{
   componentDidMount(){
       this.displayForecast();
   }
    displayForecast =()=>{
        const { forecastList,city } = this.props
        let forecastArray = [];
        let i=0;
        forecastList.map(forecast=>{
            let iconUrl = "http://openweathermap.org/img/wn/" + forecast.weather[0].icon+ "@2x.png";
            forecastArray.push(
                    <div  className="forecast">
                        <h2 >{forecast.dt_txt}</h2>
                         <p >{forecast.main.temp} °C</p>
                         <p> {forecast.weather[0].description}</p>
                        <img src={iconUrl} alt="Weather icon"/>
                    </div>
            )
        })
        return forecastArray
    }
   
    render(){
        // const forecastList  = this.props.forecastList || {}
        const { city } = this.props
        return(
            <div>
                <h1>5 day Forecast for {city}</h1>
                <div key={city}>{this.displayForecast()}</div>
             </div>
        )
    }
}