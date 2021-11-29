import React, { useState } from 'react';


class ImportParcelStatusRow extends React.Component{

    render(){
        return(
            <>
                <tr class="parcel-row">
                    <td scope="row">Driver</td>
                    <td>Sender Name</td>
                    <td>Receiver Name</td>
                    <td>West</td>
                    <td>$3.99</td>
                    <td><button>x</button><button>ok</button></td>
                </tr>

            </>           
        )
    }
}

export default ImportParcelStatusRow;