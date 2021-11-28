import React, { useState } from 'react';


class TrackingPage extends React.Component{

    render(){
        return(
            <div>
                <p>TrackingPage goes here</p>
                <label>Tracking No.</label>
                <input type="text" name="trackingno"/>
                <button>Search</button>
            </div>
            
        )
    }
}

export default TrackingPage