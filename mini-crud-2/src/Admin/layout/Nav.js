import React from 'react'
import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="/" ><img  src='../admin.jpg' style={{width:'87px',height:'75px',marginLeft:"30px"}}/></a>
  

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <NavLink  to='/' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Home</NavLink>

      </li>
      <li class="nav-item">
      <NavLink  to='/add' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Add</NavLink>
        
      </li>
      <li class="nav-item dropdown">
      <NavLink  to='/login' style={({ isActive }) => (isActive ? {color: 'black',padding:"15px",fontSize:"18px"} : {color: 'grey',padding:"15px",fontSize:"18px"})}>Login</NavLink>

        {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div> */}
      </li>
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

  </div>
</nav>

    </div>
  )
}

export default Nav
