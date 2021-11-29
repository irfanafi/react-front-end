import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import "../../css/sidepanel.css"

class SidePanel extends React.Component{
    render(){
        return(
            <div class="side-panel">
                <Navigation
                        // you can use your own router's api to get pathname
                        activeItemId="/management/members"
                        onSelect={({itemId}) => {
                        // maybe push to the route
                        }}
                        items={[
                        {
                            title: 'Dashboard',
                            itemId: '/dashboard',
                        },
                        {
                            title: 'Account',
                            itemId: '/dashboard',
                        },
                        {
                            title: 'Send Parcels',
                            itemId: '/management',
                            subNav: [
                            {
                                title: 'Single-Parcel',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Import-Parcels',
                                itemId: '/management/members',
                            },
                            ],
                        },
                        {
                            title: 'Top Up Account',
                            itemId: '/dashboard',
                        },
                        {
                            title: 'Link a friend',
                            itemId: '/dashboard',
                        },
                        {
                            title: 'Settings',
                            itemId: '/another',
                            subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                            ],
                        },
                        ]}
                    />
        </div>         
        )
    }
}

ReactDOM.render(<SidePanel />, document.getElementById("root"));
export default SidePanel;
