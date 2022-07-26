import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { updateUser } from '../Action';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Action';
import swal from 'sweetalert';
const Update = () => {
  const {id}=useParams();
 
    const [selectedUser,setselectedUser]=useState({
      });

      const dispatch= useDispatch();
     
     let y={}
       const updateSelected=useSelector((state)=>state);
useEffect(()=>{
        dispatch(fetchData());
      },[dispatch])
 for(let i=0;i<updateSelected.length;i++){
 if(updateSelected[i].id==id){
    y['name']=updateSelected[i].name;
    y['email']=updateSelected[i].email;
    y['address']=updateSelected[i].address;
 }
 }
 
 useEffect(()=>{
        setselectedUser(y);
      },[updateSelected])
      
         console.log(selectedUser)
         
      const handleCklick=(e)=>{
        e.preventDefault();

     dispatch(updateUser(selectedUser,id));
      
     swal({
          title: "Good job!",
          text: "Adding user success!",
          icon: "success",
          button: "ok!",
        }).then(function() {
          window.location.href="/";
      });
      
      }
    
      const onChange=(e)=>{
        e.preventDefault();
        const value=e.target.value
        setselectedUser({...selectedUser,[e.target.name]:value})
       }

  return (
    <div style={{width:"60%",margin:"60px"}}>

    <form >
        <div class="form-group pt-5">
            <label for="formGroupExampleInput mt-1" style={{color:"#2d4721f7",fontSize:'25px'}}> Employee Name</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter employee name" name='name' value={selectedUser.name} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2" style={{color:"#2d4721f7",fontSize:'25px'}}>Employee Email</label>
            <input type="email" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter employee email" name='email' value={selectedUser.email} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2" style={{color:"#2d4721f7",fontSize:'25px'}}>Employee Address</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput2 " placeholder="Enter employee address" name='address' value={selectedUser.address} onChange={onChange}/>
        </div>
       <button type="submit" className="btn btn-outline-success mt-5" style={{width:'100px'}} onClick={handleCklick}>edit </button>

    </form>

</div>
  )
}

export default Update
