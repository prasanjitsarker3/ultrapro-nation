import React, { useState } from 'react';

const Country = (props) => {
    const{name,population,region,flag} = props.country;
    const flagStyle={height: '100px'}
    const countryStyle={border: '1px solid red',margin: '10px',padding: '10px'}
    const handleCountry = props.handleCountry;
    

    return (
       
    
            <div style={countryStyle}>
            
            <h1>Country Name:{name}</h1>
            <img style={flagStyle} src={flag} alt="" srcset="" />
            <p>Population:{population}</p>
            <p><small>:{region}</small></p>
            <button onClick={()=>handleCountry(props.country)}>Add Country</button>
            

        </div>
        
    );
};

export default Country;