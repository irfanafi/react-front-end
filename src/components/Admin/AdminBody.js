import React, { useState } from 'react';
import ImportPage from './Import Parcel/ImportPage';
import ShoppingCartStatus from './Import Parcel/ShoppingCartStatus';
import SendParcelPage from './Import Parcel/Send Parcel/SendParcelPage';
import PageDirectory from './Page Directory/PageDirectory';
import ParcelStatusPage from './Parcel Status/ParcelStatusPage';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

class AdminBody extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          sender: {},
          receiver: {}
        };
      };

    changePages = (context) => {
        this.setState({
            parcelStatusPage: false,
            importPage: false,
            SendParcelPage: true
        })
    }

    render(){
        return(
            <div id="admin-body">
                <PageDirectory />
                <Routes>
                    <Route path="/parcelStatus" element={<ParcelStatusPage/>}/>
                    <Route path="/importParcels" element={<ImportPage /> } />
                    <Route path="/cart" element={ <ShoppingCartStatus /> } />
                    <Route path="/sendParcel" element={ <SendParcelPage />} />
                </Routes>
            </div>
                    
        )
    }
}

export default AdminBody;