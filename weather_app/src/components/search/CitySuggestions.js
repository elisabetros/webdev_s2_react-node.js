import React, { Component, useImperativeHandle } from 'react'

export default class CitySuggestions extends Component{
    handleSuggestionClick = (city) =>{
        this.props.clickedSuggestion(city)
    }
    render () {
        const { cities } = this.props
        return(
            <ul className="citySuggestions">
                {cities.map((city,index)=>{
                    return <p key={city+index}onClick={()=>{this.handleSuggestionClick(city.name)}}>
                        {city.name}, {city.country}
                        </p>
                })}

            </ul>
        )
    }
}

