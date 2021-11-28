import React, { useState } from 'react';
import "../../../../css/senderDetails.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import SensorDoorIcon from '@mui/icons-material/SensorDoor';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

class SenderDetails extends React.Component{
    render(){
        return(
            <div class="sender">
                <div class="sender-header">
                    <label>Sender Details</label>
                </div>
                <div class="sender-body">
                    <div class="sender-details-table">
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <AccountCircleIcon />
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Sender Name"/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <MailIcon />
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Sender Email"/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <PhoneIcon />
                            </div>
                            <div class="input-div">
                                <input type="tel" class="form-control" id="cname" txt_c_name="" placeholder="Sender Phone No."/>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <HomeIcon />
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Postal Code" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <SensorDoorIcon />
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Unit Number" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                <LocationSearchingIcon />
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Zone" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="icon-div">
                                
                            </div>
                            <div class="input-div">
                                <input type="text" class="form-control" id="cname" txt_c_name="" placeholder="Address" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        )
    }
}
export default SenderDetails;