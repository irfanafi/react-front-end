import React, { useState } from 'react';
import ParcelStatusRow from './ParcelStatusRow';
import "../../../css/Parcel Status Table/parcelTable.css"

class ParcelStatusTable extends React.Component{

    render(){
        return(
            <div>
                <div class="table-div">
                    <table class="table table-bordered"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Tracking No.</th>
                                <th scope="col">Receiver</th>
                                <th scope="col">Courier Name</th>
                                <th scope="col">Zone</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            < ParcelStatusRow /> 
                            < ParcelStatusRow /> 
                            < ParcelStatusRow /> 
                            < ParcelStatusRow /> 
                        </tbody>
                    </table>
                </div>
                
                              
            </div>
            
        )
    }
}

export default ParcelStatusTable;