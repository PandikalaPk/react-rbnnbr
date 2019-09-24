import React, { useState, useEffect } from 'react';
import RegionList from './RegionList';
import RegionCountryList from './RegionCountryList';

import './style.css';

const API_URL = "https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry";
const RegionCountry = () => {
  const [info, setInfo] = useState([]);
  async function getDataFromAPI() {
    const result = await fetch(API_URL);
    const data = await result.json();
    setInfo(info = data);

  }

  useEffect(() => {
    getDataFromAPI();

  }, []);


  return (
    <div >
    <div>
      <label>
        <input type="checkbox" />
        All
                </label>
      <label>
        <input type="checkbox" />
        Misc
                </label>
      <label>
        <input type="text" Value="Quick Search" />
      </label>
      </div>
      {info && info.regions && info.regions.map(regionR => {
        return <RegionCountryList data={regionR.countries} regionName={regionR.region_name} />

      })}
    </div>


  )


}


export default RegionCountry;
