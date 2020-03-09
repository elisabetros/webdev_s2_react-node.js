import React, { Component } from "react";
import Axios from 'axios';
import { WiSmallCraftAdvisory } from "react-icons/wi";
import CitySuggestions from "./CitySuggestions";

export default class Search extends Component{

    state = {
        city : "",
        cities : []
    }
   handleInputChange = (event) => {
       let val = event.target.value
       this.setState({city:val})
    //    if(this.state.city.length > 2){
    //        this.fetchCities(val)
    //     }
    //     if (val <1  ) {
    //         console.log("its 0")
    //         console.log(this.state.cities)
    //         this.setState({cities:[]})
    //     } 
   }
    fetchCities = (searchInput)=> {
        // console.log(searchInput)
        Axios.get(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=-LCSRfAcMOgYgF8B7WvKkuyERoQiJqMEG6pgG89JLJE&query=${searchInput}`)
        .then(res => {
           let cities = res.data.filter(city => {
                const regex = new RegExp(`^${searchInput}`, 'gi');
                return city.name.match(regex);  
            })
            
              this.setState({cities})
        })           
    }
    
    displayCitySuggestions = () => {
        const options = this.state.cities.map((city,index) => (
            <p key={city+index} onClick={()=>{
                console.log(city.name)
                this.setState({city:city.name, cities:[]},
                    () => this.handleSearch())           
            }}>
              {city.name}, {city.country}
            </p>
          ))
          return <ul className="citySuggestions">{options}</ul>
    }

    onClickedSuggestion = (city) =>{
        this.setState({city, cities:[]},
            () => this.handleSearch())
        document.querySelector("input").value=""
            
    }
    handleSearch = ()=>{
        this.props.handleSearchData(this.state.city)
    }
    render(){
        return(
            <div className="searchContainer">
                <input placeholder="Search by City" onChange={(event)=>this.handleInputChange(event)}/>
                <button onClick={()=>this.handleSearch()}>Search</button>
                {this.displayCitySuggestions()}
            </div>
        )
    }
}
