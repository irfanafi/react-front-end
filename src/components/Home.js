import { Link } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HomePageHeader from './Home/HomePageHeader';
import mainBodyPic from '../pictures/DeliveryPicture.jpg'
import "../css/maincss.css"
// import '../css/login.css'

class Home extends React.Component{

    render(){
        return(
            <>
                <HomePageHeader />
                <div id="mainBodyPictureContainer">
                    <img src={mainBodyPic} alt="Main Body" id="mainBodyImg"/>
                    <div id="bodyPicContent">
                        <div>
                            <h4>Welcome to Afifi's logistic page</h4>
                            <div>
                                <p>Have your parcels delivered at the fastest time at <br/> the cheapest rate in town</p>
                            </div>
                            <div>
                                <button><a href="/login">Learn More</a></button>
                                <button><a href="/register">Register</a></button>
                            </div>
                            
                        </div>
                            
                    </div>
                </div>
                
                    
            </>
            
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;