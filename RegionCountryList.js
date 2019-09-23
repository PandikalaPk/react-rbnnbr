import React, { Component } from 'react';
import { render } from 'react-dom';
import CheckBox from './CheckBox';
import CheckBoxList from './CheckBoxList';


export default class RegionCountryList extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        isAllSelected: false,
                        regionName : this.props.regionName,
                        checkList: this.props.data
                    };
                }

                onCheckBoxChange(checkName, isChecked) {
                 
                    let isAllChecked = (checkName === 'all' && isChecked);
                    let isAllUnChecked = (checkName === 'all' && !isChecked);
                    const checked = isChecked;

                    const checkList = this.state.checkList.map((country, index) => {
                        if(isAllChecked || country.country_name === checkName) {
                            return Object.assign({}, country, {
                                checked,
                            });
                        } else if (isAllUnChecked) {
                            return Object.assign({}, country, {
                                checked: false,
                            });
                        }

                        return country;
                    });

                    let isAllSelected = (this.state.checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

                    this.setState({
                        checkList,
                        isAllSelected,
                    });
 
                }

                render() {
                    return (
                      <div>
                      <CheckBoxList countries={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} regionName={this.state.opcoName} />
                    
                    </div>
                    );
                }
            }
