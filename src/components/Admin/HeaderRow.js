import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "../../css/headerRow.css"

class HeaderRow extends React.Component{
    render(){
        return(
            <div class="header-buttons">
                <a href="#">
                    Shopping Cart
                </a>
                <a href="#">
                    Profile
                </a>
                <a href="#"> 
                    Logout
                </a>
                <a href="#">
                    Track your parcel here..
                </a>
            </div>
        )
    }
}

export default HeaderRow;