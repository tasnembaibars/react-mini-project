import React, { useEffect, useState } from 'react'
import { button } from 'bootstrap'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import {addUser} from '../Action';
import axios from 'axios';
import swal from 'sweetalert';

// import { Connect } from 'react-redux/es/components/connect';
const Add = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleCklick=(e)=>{
      e.preventDefault();

      const userInfo={
        name:name,
        email:email,
        address:address
      }
      dispatch(addUser(name,email,address));
      swal({
        title: "Good job!",
        text: "Adding user success!",
        icon: "success",
        button: "ok!",
      }).then(function() {
        window.location.href="/";
    });
  
    }
    //  if(handleCklick()==true)
    //     swal({
    //       text: "Adding user failed!",
    //       icon: "warning",
    //       buttons: true,
    //       dangerMode: true,
    //     });
    //   else
      

    return (
        <div style={{width:"60%",margin:"60px"}}>

            <form >
                <div class="form-group pt-4">
                    <label for="formGroupExampleInput mt-1" style={{color:"#2d4721f7",fontSize:'25px'}}> Employee Name</label>
                    <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter employee name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="form-group pt-4">
                    <label for="formGroupExampleInput2" style={{color:"#2d4721f7",fontSize:'25px'}}>Employee Email</label>
                    <input type="email" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter employee email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="form-group pt-4">
                    <label for="formGroupExampleInput2" style={{color:"#2d4721f7",fontSize:'25px'}}>Employee Address</label>
                    <input type="text" class="form-control mt-2" id="formGroupExampleInput2 " placeholder="Enter employee address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
               <button type="submit" className="btn btn-outline-success mt-5" style={{width:'100px'}} onClick={handleCklick}>Add </button>

            </form>

        </div>
    )
}
export default  Add;

// export default Connect(null,{addUser})( Add);

