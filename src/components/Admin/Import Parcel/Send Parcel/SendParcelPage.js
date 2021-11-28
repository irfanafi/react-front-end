import React, { useState } from 'react';
import ReceiverDetails from './ReceiverDetails';
import SenderDetails from './SenderDetails';
import SendParcelsAddOptions from './SendParcelsAddOptions';
import "../../../../css/sendParcelPage.css"


class SendParcelPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
          sender: {},
          receiver: {}
        };
      };

    render(){
        return(
            <div id="sendParcelContainer">
                <div id="left-side">
                    <SenderDetails />
                    <ReceiverDetails />
                </div>
                <div id="right-side">
                    <SendParcelsAddOptions />
                    <div>
                        <button>Back</button>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>           
        )
    }
}
export default SendParcelPage;