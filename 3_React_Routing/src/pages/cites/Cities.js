import React, { Component, cloneElement } from 'react';
import CityTable from '../../component/table/Table';
import {BounceLoader } from 'react-spinners';



const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default class City extends Component{
    state = {
        cityData : [],
        loading : true
    }

    async componentDidMount(){
        const response = await fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities");
        const cities = await response.json();
        console.log(cities)
        this.setState({cityData:cities, loading:false})
    }

    FetchCities= () => {
        fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities")
        .then(res=>res.json())
        .then(response => {return response});
    }

    render() {
        const { cityData, loading  } = this.state;
        return(
            <div>{ loading ?
                <BounceLoader className="loader" css={override} color={"royalblue"} />
                :
                <CityTable columns={["City", "State", "District"]} rows={cityData}/>
                }
            </div>
        )
    }
}