import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ImportPage from './Import Parcel/ImportPage';
import SendParcelPage from './Import Parcel/Send Parcel/SendParcelPage';
import PageDirectory from './Page Directory/PageDirectory';
import ParcelStatusPage from './Parcel Status/ParcelStatusPage';

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
                < PageDirectory />
                {/* < ParcelStatusPage /> */}
                <ImportPage />
                {/* <SendParcelPage /> */}
            </div>
        )
    }
}

export default AdminBody;