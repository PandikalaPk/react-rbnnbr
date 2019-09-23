import React, { useState, useEffect } from 'react';
import './style.css';


const RegionList = (props) =>{
console.log("find..",props.data);
  return(
    
<div className="row" >
        {props.data.map(regionR => {

          return (
            <div className="column">
            <div className="card">

            <header className="region-header">
              <h4>
                <label>
                  <input type="checkbox"  />
                  {regionR.region_name }
                </label>
              </h4>
             </header>

              {regionR.countries.map(country => {
                return (
                      <div className ="reghead">        
                      <label>
                        <input type="checkbox" />
                        {country.country_name}
                      </label>
                         </div>            
                         )
              })}
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default RegionList;