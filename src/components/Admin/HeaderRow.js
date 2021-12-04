import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from 'react-router';
import "../../css/headerRow.css"

function HeaderRow(){
    const { pathname } = useLocation();
    return(
        <div class="header-buttons">
            <a href={"/home/cart"}>
                Shopping Cart
            </a>
            <a href="#">
                Profile
            </a>
            <a href="#"> 
                Logout
            </a>
            <a href={"/home/parcelStatus"}>
                Track your parcel here..
            </a>
        </div>
    )
}

export default HeaderRow;