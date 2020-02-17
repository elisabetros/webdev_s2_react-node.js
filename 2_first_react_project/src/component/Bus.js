import React, { Component } from "react";
import Wheel from "./Wheel";


export default class Bus extends Component{
    render() {
        const wheel1 = {wheel : "wheel 1"};
        const wheel2 = {wheel : "wheel 2"};
        const wheel3 = {wheel : "wheel 3"};
        const wheel4 = {wheel : "wheel 4"};
        const wheelArray = [wheel1, wheel2, wheel3, wheel4]
        // console.log(wheelArray)
        return(
            <div className="bus">
                <h1>Bus</h1>
                {wheelArray.map((singleWheel,index)=>{
                   return <Wheel key={"wheel" + index} wheel={singleWheel} />

                })}
            </div>
        )
    }
}