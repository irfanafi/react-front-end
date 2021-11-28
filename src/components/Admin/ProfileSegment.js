import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../css/profileSegment.css'
import '../../resources/images/profile-pic.png'

class ProfileSegment extends React.Component{
    render(){
        return(
            <div class="profile-div">
                <div class="img-div">
                    <img src={"../../resources/images/profile-pic.png"}></img>
                </div>
                <div class="details-div">
                    <div>
                        <label class="store-name">Store Name</label>
                    </div>
                    <div>
                        <label class="account-balance">$200.56</label>
                    </div>
                    <div>
                        <a class="top-up" href="#">Top Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileSegment;