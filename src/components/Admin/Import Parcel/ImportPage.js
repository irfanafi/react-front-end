import React, { useState } from 'react';
import "../../../css/importPage.css"


class ImportPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          senders: {},
          receivers: {},
          selectedFile: null,
          setSelectedFile: null,
          isFilePicked: false,
          setIsFilePicked: false
        };
      };

    changeHandler = (event) => {
        console.log(event.target.files)
        this.setState({setSelectedFile: event.target.files[0]});
        this.setState({setIsSelected: true});
    };

    handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', this.state.selectedFile);
        console.log(formData)
		// fetch(
		// 	'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
		// 	{
		// 		method: 'POST',
		// 		body: formData,
		// 	}
		// )
		// 	.then((response) => response.json())
		// 	.then((result) => {
		// 		console.log('Success:', result);
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 	});
	};

    render(){
        return(
            <div class="import-page-div">
                <div class="modal-header">
                    <div>
                        <h3>Import products by CSV</h3>
                    </div>
                </div>
                <div>
                    <div class="p-div">
                        <p>Download a <a href="#">template</a>  of the import file</p>
                    </div>
                    
                    <div class="drop-zone">
                        <div>
                            <form action="#">
                                <input type="file" id="myFile" name="filename" onChange={this.changeHandler}/>
                            </form>
                        </div>
                    </div> 
                </div>
                <div class="modal-footer-self">
                    <div class="help-div">
                        <a href="#">Need help importing orders?</a>
                    </div>
                    <div class="footer-buttons">
                        <div class="cancel-button-div">
                            <button>Cancel</button>
                        </div>
                        <div class="submit-button-div">
                            <button onClick={this.handleSubmission}>Upload and Continue</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
export default ImportPage;