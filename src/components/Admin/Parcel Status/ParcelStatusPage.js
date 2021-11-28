import React, { useState } from 'react';
import ParcelStatusTable from './ParcelStatusTable';
import SearchElement from './SearchElement';
import "../../../css/parcelStatusPage.css"


class ParcelStatusPage extends React.Component{

    render(){
        return(
            <div>
                <div class="status-page-container">
                    <div class="status-page-body-header">
                        <div>
                            Download
                        </div>
                        <SearchElement />
                    </div>
                    
                    <ParcelStatusTable />
                </div>
                
                
                
            </div>
            
        )
    }
}

export default ParcelStatusPage;