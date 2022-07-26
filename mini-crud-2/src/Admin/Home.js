import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import React, { useEffect, useState } from 'react'
import { deleteUser ,updateUser} from '../Action';
import swal from 'sweetalert';
import {Link} from 'react-router-dom'
const Home = () => {
 const dispatch=useDispatch();
 const users=useSelector((state)=>state)
 console.log(users)
   useEffect(()=>{
     dispatch(fetchData());
   },[])

  //  const handleDelete = (id) => {
  //   dispatch(deleteUser({id}));

  // };
  // const swal=()=>{
  //   swal({
  //     title: "Good job!",
  //     text: "Adding user success!",
  //     icon: "success",
  //     button: "ok!",
  //   }).then(function() {
  //     window.location.href="/";
  // });
  // }
  return (
    // <div  class="row">
    //   {/* <h4 style={{color:"white"}}> Our Employees </h4> */}
    //        {users.length>0 && users.map(el=>{
    // return(
        
    //     <div className="card col-md-4 m-5">
    //     <div className="card-body">
        
    //     <h3 className="mb-2">{el.name}</h3>
    //          <p className="card-text">{el.email}</p>
           
    //          <p className="card-text"> { el.address}</p>
           
    //          {/* <button className="btn btn-danger"  style={{ marginRight: "10px" }} >
    //          edit
    //          </button> */}
    //          {/* <button className="btn btn-danger"  onClick={handleDelete}> Delete</button> */}
    //         <Link to={'/edit/'+el.id} className="btn btn-secondary"  style={{ marginRight: "10px" }}>Edit</Link>

    //          <button className="btn btn-secondary"  onClick={() => {dispatch(deleteUser(el.id))}}> Delete</button>
    //          {/* <button  onClick={() => {dispatch(deleteUser(el.id))}}>X</button> */}

    //    </div>
    //    </div>


    //    )
    //   })} 
       
    
    // </div>
    <div style={{width:"87%"}}>
<span style={{color:"grey",fontSize:"25px",marginTop:"10px",marginLeft:"550px"}}>Employees Controller <small style={{color:"black"}}>- Admin Dashboard</small></span>

      <table class="table" style={{color:"#2d4721d4",margin:"80px",fontSize:"25px"}}>
  <thead>
    <tr style={{color:"#2d4721f7"}}>
    
      <th scope="col">Employee Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
  {users.length>0 && users.map(el=>{
    return(
    <tr>
      
      <td>{el.name}</td>
      <td>{ el.email}</td>
      <td>{ el.address}</td>
      <td>
       <Link to={'/edit/'+el.id} className="btn btn-outline-success"  style={{ marginRight: "10px" }}>Edit</Link>
       <button className="btn btn-outline-danger"  onClick={() => {dispatch(deleteUser(el.id))}}> Delete</button>

      </td>
    </tr>
    
    )
      })} 
      
  </tbody>
</table>
<div style={{display:"flex",justifyContent:"end",width:"97%"}}>
       <Link to={'/add'} className="btn btn-outline-secondary" style={{ width: "80px",justifyContent:"end" }} > Add </Link>
       </div>
</div> 
  )
}

export default Home
