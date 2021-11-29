import React, { useState } from 'react';
import ImportParcelStatusRow from './ImportParcelStatusRow';


class ShoppingCartStatus extends React.Component{

    //dispatch action to import from back end



    render(){
        return(
            <div>
                <div class="table-div">
                    <table class="table table-bordered"> 
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Assigned Driver</th>
                                <th scope="col">Sender</th>
                                <th scope="col">Receiver</th>
                                <th scope="col">Zone</th>
                                <th scope="col">Price</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            < ImportParcelStatusRow /> 
                            < ImportParcelStatusRow /> 
                            < ImportParcelStatusRow /> 
                            < ImportParcelStatusRow /> 
                        </tbody>
                    </table>
                    <button>Cancel</button>
                    <button>Pay Now</button>
                </div>
                
                              
            </div>
            
        )
    }
}
export default ShoppingCartStatus;