import React, { useState, useEffect } from 'react';
import  RegionCountryList from 'RegionCountryList';
import './style.css';


const Region = (props) =>{
console.log(props.data);
  return(
    
<div className="row" >
        {props.data.map(regionR => {

          return (
            <div className="column">
            <div className="card">

            <header className="card-header">
              <h4>
                <label>
                  <input type="checkbox"  />
                  {regionR.region_name}
                </label>
              </h4>
            </header>

              {regionR.countries.map(country => {
                return (
                      <div>        
                      <RegionCountryList countryobj={country} />
                         </div>            )
              })}
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default Opco;