import React, { Component } from "react";
import Axios from 'axios';
import keys from './../../config.json';
import { WiSmallCraftAdvisory } from "react-icons/wi";



export default class Search extends Component {

    state = {
        city : "",
        cities : []
    }
   handleInputChange = (event) => {
       let val = event.target.value
       this.setState({city:val})
       if(val.length >= 1){
           this.fetchCities(val)
        } 
   }
    fetchCities = (searchInput) => {
        // console.log(searchInput)
        Axios.get(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${keys.search}&query=${searchInput}`)
        .then(res => {
            console.log(res.data.suggestions)
            let suggestions = res.data.suggestions.filter(suggestion=>{
                if(suggestion.matchLevel === "city"){
                    return suggestion
                }
                // console.log(suggestion)
            })
            this.setState({cities:suggestions})
            
        })           
    }
    
    displayCitySuggestions = () => {
        // console.log(this.state.cities)
        const options = this.state.cities.map( (city,index) => {
                   return( <p key={city+index} onClick={ () => {
                        this.setState({city:city.address.city, cities:[]},
                        () => this.handleSearch())           
                }}>
                  {city.address.city}, {city.address.country}
                </p>)
              
            })
              return <ul className="citySuggestions">{options}</ul>

    }

    onClickedSuggestion = (city) => {
        this.setState({city},
            () => this.handleSearch())
        document.querySelector("input").value=""
            
    }
    handleSearch = () => {
        this.setState({cities:[]})
        this.props.handleSearchData(this.state.city)
    }
    render() {
        return(
            <div className="searchContainer">
                <input placeholder="Search by City" onChange={ (event) => this.handleInputChange(event) }/>
                <button onClick={ () => this.handleSearch() }>Search</button>
                {this.displayCitySuggestions()}
            </div>
        )
    }
}
