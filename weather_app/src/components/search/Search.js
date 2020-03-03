import React, { Component } from "react";

export default class Search extends Component{
    state = {
        city : ""
    }
    handleSearch = ()=>{
        this.props.handleSearchData(this.state.city)
        // console.log(this.state.city)
    }
    render(){
        return(
            <div className="searchContainer">
                <input placeholder="Search by City" onChange={(event)=>{this.setState({city:event.target.value})}}/>
                <button onClick={()=>this.handleSearch()}>Search</button>
            </div>
        )
    }
}
