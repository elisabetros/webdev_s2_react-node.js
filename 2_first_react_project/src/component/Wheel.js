import React, { Component } from 'react';

export default class Wheels extends Component{
    render(){
        const {wheel} = this.props.wheel;
        return(
            <div>
                <p>This is {wheel}</p>
            </div>
        )
    }
}