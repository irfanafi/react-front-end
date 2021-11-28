import React, { useState } from 'react';
import AddOptionsWidget from './AddOptionsWidget';


class SendParcelsAddOptions extends React.Component{
    render(){
        return(
            <div id="addOptionsContainer">
                <AddOptionsWidget />
                <AddOptionsWidget />
                <AddOptionsWidget />
            </div>
        )
    }

}

export default SendParcelsAddOptions;