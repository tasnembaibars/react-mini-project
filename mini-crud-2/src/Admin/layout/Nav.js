import React from 'react'
import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      

{/* nav2 */}
<nav className="navbar navbar-expand-lg navbar-dark " >
            <div className="container-fluid">
            <a class="navbar-brand" href="/" ><img  src='../logo6.png' style={{width:'100px',height:'95px',marginLeft:"30px"}}/></a>

                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/" style={({ isActive }) => (isActive ? {color: '#2d4721f7',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add" style={({ isActive }) => (isActive ? {color: '#2d4721f7',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Add </NavLink>
                    </li>


                    <li className="nav-item">
                        {/* <NavLink className="nav-link" to="/login" style={({ isActive }) => (isActive ? {color: '#2d4721f7',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Login</NavLink> */}
                    </li>



                </ul>
                </div>
            </div>
        </nav>


{/* nav2 */}

    </div>
  )
}

export default Nav
