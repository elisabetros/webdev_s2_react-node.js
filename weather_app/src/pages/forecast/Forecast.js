import React, { Component } from "react";
import Axios from 'axios';
// import SingleForecast from "./SingleForecast";
// import { WiStrongWind as Wind} from 'react-icons/wi';
import {WiCloudy as Clouds } from 'react-icons/wi';
import {WiDaySunny as Sun } from 'react-icons/wi';
import {WiRain as Rain } from 'react-icons/wi';
import {WiSnow as Snow } from 'react-icons/wi';

// import Loader from "../../components/loader/Loader";

const apiKey = "949fc69ba12a1ed41083b08fc8a2634b";

export default class Forecast extends Component{
  state = {
    forecastList : [],
    isLoading : true
  }

   async componentDidMount(){
    const res = await Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&APPID=${apiKey}&units=metric`)
    // let forecastData = res.data.list
    // console.log(forecastData)
      this.setState({forecastList:res.data.list, isLoading:false})
    }
    
    displayWeatherIcon = (main)=>{
      let WeatherIcon;
      const weatherTypeArray = ['Clouds', 'Clear', 'Rain', 'Snow']
      const weatherComponentArray = [<Clouds/>, <Sun/>, <Rain/>, <Snow/>]
      console.log(main)
          if(weatherTypeArray.includes(main)){
              // console.log(weatherTypeArray.indexOf(this.props.main))
              WeatherIcon = weatherComponentArray[weatherTypeArray.indexOf(main)];
              return WeatherIcon;
      }
  }
   fetchForecastData = (city) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}&units=metric`)
    .then(res => {
      console.log("forecast", res.data)
      let forecastData = res.data.list
      forecastData.map(forecast => {
        let joined = this.state.forecastList.concat(forecast)
        // if (this._isMounted) {
            this.setState({forecastList:joined,
                isLoading: false})
        // }
        return this.state.forecastList;
      });
    })
  
  }
 
  convertDate=(date)=>{
    let unixDate = date;        
    let dateObj = new Date(unixDate * 1000);
    let dateStr = dateObj.toDateString();
    let weekday = dateStr.slice(0,3);
    let time = dateObj.toTimeString().slice(0, -45);
    return weekday
}
  display5DayForecast =()=>{
        const { city } = this.props
        const { forecastList } = this.state
        let forecastArray = [];
        let i=0;
        forecastList.map((forecast,index)=>{
          if(index % 8===0){
            let iconUrl = this.displayWeatherIcon(forecast.weather[0].main);
            console.log(iconUrl)
            forecastArray.push(
                    <div key={forecast.dt_txt} className="forecast">
                        <h2 >{this.convertDate(forecast.dt)}</h2>
                        <p> {forecast.weather[0].description}</p>
                        {iconUrl}
                        <h3>{forecast.main.temp} °C</h3>
                        <p>Wind: {forecast.wind.speed} m/s</p>
                    </div>
            )
          }
            
        })
        return forecastArray
    }

    render(){
        const { city } = this.props
        const {forecastList } = this.state
        console.log(forecastList)
        return(
            <div>
                <h2>5 day forecast</h2>
                <h1>{city}</h1>
                <div className="forecastList">
                  {/* {forecastList.map((forecast,index)=>{  
                  return  <SingleForecast key={"forecast"+ index}  wind={forecast.wind.speed} iconUrl={forecast.weather[0].icon} date={forecast.dt} temp={forecast.main.temp} desc={forecast.weather[0].description} />})} */}
                  {this.display5DayForecast()}
                 </div>
            </div>
        )
    }
}