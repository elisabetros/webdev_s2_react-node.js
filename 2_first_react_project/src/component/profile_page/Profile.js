import React, { Component } from 'react';

export default class Profile extends Component{
    render() {
        // Destructuring assignment
        const { name, hobby } = this.props.profile;
        // console.log("Hello", this.props.profile);
        return(
            <div >
                <h2>Profile</h2>
                <p>Hello {name}.</p>
                <p>My hobby is {hobby}.</p>
            </div>
        )
    }
}