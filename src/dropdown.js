import React from 'react'

const Dropdown = (props) =>{
         
                    return(
                <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown">
                            Categories
                                </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/menclothes">Men's Clothing</a></li>
                            <li><a className="dropdown-item" href="/womenclothes">Women's Clothing</a></li>
                            <li><a className="dropdown-item" href="/electronics">Electronics</a></li>
                            <li><a className="dropdown-item" href="/jewellery">jewellery</a></li>
                            <li><a className="dropdown-item" href="/">@All</a></li>
                        </ul>
                        <input type="text" id="categorybox"  placeholder="Choose..." style={{marginLeft:"2%"}} readOnly={true} value={props.ctg}></input>
                </div>
                    )
                    }

export default Dropdown;