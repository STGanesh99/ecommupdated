import React from 'react'
import {useHistory} from "react-router-dom"


const Nav = (props) => {
   const history = useHistory();
            return (
                    <nav className="navbar navbar-dark bg-dark ">
                        <div className="Logo">
                            Shopi-FY
                        </div>
                        <div onClick={()=>history.push("/checkout")}>
                            <i className="fa fa-shopping-cart"></i>
                            <button className='badge badge-warning' id='lblCartCount' > {props.items} </button>
                            </div>
                        </nav> 
            )
}
export default Nav;