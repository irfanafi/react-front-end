import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../../css/Page Directory/pageDirectory.css'

class PageDirectory extends React.Component{
    render(){
        return(
            <div class="pageDirContainer">
                <div class="left-div">Current Page</div>
                <div class="right-div">Directory Path</div>
            </div>
        )
    }
}

export default PageDirectory;