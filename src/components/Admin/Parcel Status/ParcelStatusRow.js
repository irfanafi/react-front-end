import React, { useState } from 'react';


class ParcelStatusRow extends React.Component{

    render(){
        return(
            <>
                <tr class="parcel-row">
                    <td scope="row">Tracking No.</td>
                    <td>Receiver</td>
                    <td>Courier Name</td>
                    <td>Zone</td>
                    <td>Date</td>
                    <td>Status</td>
                </tr>

            </>           
        )
    }
}

export default ParcelStatusRow;