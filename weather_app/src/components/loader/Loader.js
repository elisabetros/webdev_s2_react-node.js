import React, { Component } from "react";
import { SyncLoader } from 'react-spinners';
 


export default class Loader extends Component{
    render() {
        return(
            <SyncLoader className="loader"/>
        )
    }
}