import React, { Component } from 'react';
import { FaBeer } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
 
export default class BeerIcon extends Component {
    render() {
        return (<div>
            <h3> Lets go for a <FaBeer />? </h3>
            <FaSun className="sun"/>
           <FaMoon className="moon"/>? 
            <h3> Is it <FaCloud className="cloud"/>? </h3>
            
            </div>)
    }
}