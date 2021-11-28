import React, { useState } from 'react';


class ImportParcelRow extends React.Component{
    render(){
        return(
            <div>
                <p>ImportParcelRow goes here</p>
                <label>File to Upload</label>
                <label>Order ID</label>
                <label>Postal Code</label>
                <label>Receiver Details</label>
                <label>Parcel Details</label>
                <label>Value</label>
                <label>Weight</label>
                <label>Contact</label>
                <label>Email</label>
            </div>
            
        )
    }
}
export default ImportParcelRow;