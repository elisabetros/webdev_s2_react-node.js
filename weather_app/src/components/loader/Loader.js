import React, { Component } from "react";
import { SyncLoader } from 'react-spinners';
 
const override =`
  position:absolute;
  top:50%;
  left:50%;
  margin: auto;
`;

export default class Loader extends Component{
    render() {
        return(
            <div className="loader">
            <SyncLoader css={override} color={"#312BB7"}/>
            </div>
        )
    }
}