import React from 'react';

export default function CheckBox({name, value, tick, onCheck}) {
                  return (
                  <div >
                    <label>
                        <input
                            name={name}
                            type="checkbox"
                            value={value}
                            checked={tick || false}
                            onChange={onCheck}
                        />
                        {value}
                    </label>
                    </div>
                );
            }
