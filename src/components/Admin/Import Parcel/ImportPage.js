import React, { useState } from 'react';
import "../../../css/importPage.css"
import * as XLSX from 'xlsx';


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
        this.setState({setSelectedFile: event.target.files[0]});
        this.file = event.target.files[0];
        this.setState({setIsSelected: true});
    };
    
    checkAndRenderOrder(data){
        console.log(data[0])
    }

    handleSubmission = (e) => {
        e.preventDefault();
        var reader = new FileReader();
        console.log("Before onload")
        reader.onload = function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_csv(ws, {header:1});

            var lines = dataParse.split("\n");

            var result = [];

            var headers = lines[0].split(",");

            for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);
            }
            console.log(result)
            var totalNumberOfOrders = result.length;
            console.log("Total number of orders: ", totalNumberOfOrders)
            //return result; //JavaScript object
            console.log(JSON.stringify(result)); //JSON

            //Send to back end here//


        };
        reader.readAsBinaryString(this.file)
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
                    <div class="dropzone-container">
                        <div class="drop-zone">
                            <div>
                                <form action="#">
                                    <input type="file" id="myFile" name="filename" onChange={this.changeHandler}/>
                                </form>
                            </div>
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