import React from 'react';
import CheckBox from './CheckBox';

export default function CheckBoxList({ countries, isCheckedAll, onCheck, regionName }) {
 
  const checkBoxOptions = (
    <div>
      {countries.map((country, index) => {
        
        return (
          <CheckBox key={index} name={country.country_code} value={country.country_name} tick={country.checked} onCheck={(e) => onCheck(country.country_name, e.target.checked)} />
        );
      })}
    </div>
  );

  return (
    <div className="column">
      <div className="card">

        <header className="card-header">
          <CheckBox name="select-all" value={regionName} tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)} />
        </header>
        {checkBoxOptions}
      </div>
    </div>
  );
}