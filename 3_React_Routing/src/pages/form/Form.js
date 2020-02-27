import React, { Component } from "react";

export default class Form extends Component{
    state = {
        firstName : undefined,
        lastName : undefined
    }
    handleInputChange = (event) =>{
        this.setState({
            [event.target.id]: event.target.value 
        })
    }
    // handlePrintValues = () =>{
    //     console.log("first name:", this.state.firstName,"last name:", this.state.lastName)
    //     const fullName = this.state.firstName + " " + this.state.lastName;
    //     this.props.nameCallback(fullName);
    // }
    handleFormSubmit = () => {
        const { firstName, lastName } = this.state;
        this.props.handleNameChange(firstName, lastName)
        this.props.history.push("/");       
    }
    render() {
        return (
            <div>
                <h1>Form</h1>
                <input id="firstName" placeholder="First name" onChange={(event) => this.handleInputChange(event)}/>
                <input id="lastName" placeholder="Last name" onChange={(event) => this.handleInputChange(event)} />
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>
        )
    }
}