import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import React, { useEffect, useState } from 'react'
import { deleteUser ,updateUser} from '../Action';


const Home = () => {
 const dispatch=useDispatch();
 const users=useSelector((state)=>state)
 console.log(users)
   useEffect(()=>{
     dispatch(fetchData());
   },[])

  //  const handleDelete = (id) => {
  //   dispatch(deleteUser({ id }));
  // };
  return (
    <div  class="row">
           {users.length>0 && users.map(el=>{
    return(
        
        <div className="card col-md-4 mt-2">
        <div className="card-body">
        
        <h3 className="mb-2">{el.name}</h3>
             <p className="card-text">{el.email}</p>
           
             <p className="card-text"> { el.address}</p>
           
             <          
             <button className="btn btn-danger"  onClick={() => {dispatch(deleteUser(el.id))}}> Delete</button>
             {/* <button  onClick={() => {dispatch(deleteUser(el.id))}}>X</button> */}
             {/* <button  onClick={() => {dispatch(updateUser(el.id))}}>edit</button> */}

       </div>
       </div>







       )
      })} 
       
    
    </div>
  )
}

export default Home
