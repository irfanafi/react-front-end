import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AdminBody from './Admin/AdminBody';
import HeaderRow from './Admin/HeaderRow';
import ProfileSegment from './Admin/ProfileSegment';
import SidePanel from './Admin/SidePanel';
import '../css/mainAdmin.css'
import ImportPage from './Admin/Import Parcel/ImportPage';
import SendParcelPage from './Admin/Import Parcel/Send Parcel/SendParcelPage';


class Admin extends React.Component{
    render(){
        return(
            <div>
                <div class="header-row">
                    <HeaderRow />
                </div>
                <div class="clearfix"></div>
                <div class="admin-container">
                    <div class="fixed">
                        <ProfileSegment/>
                        <SidePanel />
                    </div>
                    <div class="flex-item">
                        <AdminBody />
                    </div>
                </div>

                
                
               
            </div>
        )
    }
}
export default Admin;
