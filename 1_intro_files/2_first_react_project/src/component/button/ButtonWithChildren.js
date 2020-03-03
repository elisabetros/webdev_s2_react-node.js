import React, { Component } from 'react';
import "./button.css";


export default class ButtonWithChildren extends Component{
    render() {
        console.log(this.props)
        const { children } = this.props;
        return(
            <button className="button-with-children" onClick={() => console.log("click")}>{children || "Click"}</button>
        )
    }
}