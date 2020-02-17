import React, { Component } from 'react';
import Profile from './Profile';


export default class ProfilePage extends Component{
    render() {
        const elisabetProfile = { name: "Elísabet", hobby: "Plants" };
        const olgaProfile = { name: "Olga", hobby: "Reading" };
        const helgaProfile = { name: "Helga", hobby: "Running" };
        const profileArray = [elisabetProfile, olgaProfile, helgaProfile]
        return(
            <div className="profile-page">
                <h1>Profile Page</h1>
                {/* <Profile profile={elisabetProfile}/>
                <Profile profile={olgaProfile}/>
                <Profile profile={helgaProfile}/> */}
               { profileArray.map((singleProfile, index) =>{
                   return <Profile key={"profile" + index} profile={singleProfile}/>
                })}
            </div>
        )
    }
}

