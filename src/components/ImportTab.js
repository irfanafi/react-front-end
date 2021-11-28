import React, { useState } from 'react';


class ImportTab extends React.Component{
    render(){
        return(
            <div>
                <p>Import Tab goes here</p>
                <label>File to Upload</label>
                <input type='file' />
                <button>Cancel</button>
                <button>Import Orders</button>
            </div>
            
        )
    }
}
export default ImportTab;