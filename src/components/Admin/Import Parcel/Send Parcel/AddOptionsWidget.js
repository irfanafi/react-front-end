import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import "../../../../css/AddOptionsWidget.css"


class AddOptionsWidget extends React.Component{
    render(){
        return(
            <div class="main-widget-div">
                <div class="widget-left">
                    <Switch defaultChecked />
                </div>
                <div class="widget-right">
                    <div>
                        <h5>Tracking SMS</h5>
                    </div>
                    <div>
                        <p>Send customised tracking sms to receiver for S$0.02</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddOptionsWidget;