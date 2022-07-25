import React, { useEffect, useState } from 'react'
import { button } from 'bootstrap'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { fetchData } from '../Action';
import {addUser} from '../Action';
import axios from 'axios';
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
    }
   

    return (
        <div>

            <form >
                <div class="form-group pt-5">
                    <label for="formGroupExampleInput mt-1"> Admin Name</label>
                    <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter admin name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="form-group pt-5">
                    <label for="formGroupExampleInput2">Admin Email</label>
                    <input type="email" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter admin email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="form-group pt-5">
                    <label for="formGroupExampleInput2">Admin Address</label>
                    <input type="text" class="form-control mt-2" id="formGroupExampleInput2 " placeholder="Enter admin address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
               <button type="submit" className="btn btn-outline-success mt-5" onClick={handleCklick}>Add </button>

            </form>

        </div>
    )
}
export default  Add;

// export default Connect(null,{addUser})( Add);

