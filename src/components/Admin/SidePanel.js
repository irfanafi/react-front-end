import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from 'react-minimal-side-navigation';
import { Sidenav, Nav, Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.css';

class SidePanel extends React.Component{
    render(){
        return(
            <div >
                <Sidenav >
                <Sidenav.Body>
                    <Nav>
                    <Nav.Item eventKey="1">
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2">
                        Account
                    </Nav.Item>
                    <Dropdown eventKey="3" title="Send Parcels">
                        <Dropdown.Item eventKey="3-1" href="/home/sendParcel">Single Parcel</Dropdown.Item>
                        <Dropdown.Item eventKey="3-2" href="/home/importParcels">Import Parcels</Dropdown.Item>
                    </Dropdown>
                    <Nav.Item eventKey="4">
                        Top Up Account
                    </Nav.Item>
                    <Nav.Item eventKey="5">
                        Refer a friend
                    </Nav.Item>
                    <Nav.Item eventKey="6">
                        Settings
                    </Nav.Item>
                    </Nav>
                </Sidenav.Body>
                </Sidenav>
            </div>       
        )
    }
}

ReactDOM.render(<SidePanel />, document.getElementById("root"));
export default SidePanel;
