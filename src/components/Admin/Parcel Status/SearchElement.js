import React, { useState } from 'react';

class SearchElement extends React.Component{

    render(){
        return(
            <div>
                <form action="/" method="get">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search blog posts</span>
                    </label>
                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search parcel"
                        name="s" 
                    />
                    <button type="submit">Search</button>
                </form> 
            </div>
            
        )
    }
}

export default SearchElement;