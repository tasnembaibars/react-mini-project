import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { CheckUser } from '../Action';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [islogged, setislogged] = useState(false);
    const dispatch=useDispatch();
    const users=useSelector((state)=>state);
    console.log(users)
    const handleClick=(e)=>{
      e.preventDefault();
      dispatch(CheckUser(email,password,islogged));
    }

  return (


    <div class="container" style={{width:"60%",margin:"60px"}}>
        <form>
    <div class="form-group pt-5">
      <label for="exampleInputEmail1" style={{color:"#385e26f7",fontSize:'25px'}}>Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>

    </div>
    <div class="form-group pt-5">
      <label for="exampleInputPassword1" style={{color:"#385e26f7",fontSize:'25px'}}>Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e)=>setpassword(e.target.value)} required/>
    </div>

    <button type="submit" class="btn btn-outline-success mt-5" style={{width:'100px'}} onClick={handleClick}>Submit</button>
  </form></div>
  )
}