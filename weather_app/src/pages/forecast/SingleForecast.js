import React, { Component } from "react";



export default class SingleForecast extends Component {
    convertDate=()=>{
        let unixDate = this.props.date;        
        let dateObj = new Date(unixDate * 1000);
        let dateStr = dateObj.toDateString();
        let weekday = dateStr.slice(0,3);
        let time = dateObj.toTimeString().slice(0, -45);
        return weekday
    }
    
    render() {
        const { iconUrl, date, temp, desc, wind } = this.props;
        // let iconUrl = 
        return(
            <div key={date} className="forecast">
                <h3>{this.convertDate()}</h3>
                <img src={`http://openweathermap.org/img/wn/${iconUrl}@2x.png`} alt="Weather Icon"/>
                <h2 className="temp">{temp}°C</h2>
                <p>{desc}</p>
                <p>Wind: {wind}</p>
            </div>
        )
    }
}