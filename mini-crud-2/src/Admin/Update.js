import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { updateUser } from '../Action';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Action';
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
      }

      const onChange=(e)=>{
        e.preventDefault();
        const value=e.target.value
        setselectedUser({...selectedUser,[e.target.name]:value})
       }

  return (
    <div>

    <form >
        <div class="form-group pt-5">
            <label for="formGroupExampleInput mt-1"> Admin Name</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput" placeholder="Enter admin name" name='name' value={selectedUser.name} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2">Admin Email</label>
            <input type="email" class="form-control mt-2" id="formGroupExampleInput2" placeholder="Enter admin email" name='email' value={selectedUser.email} onChange={onChange}/>
        </div>
        <div class="form-group pt-5">
            <label for="formGroupExampleInput2">Admin Address</label>
            <input type="text" class="form-control mt-2" id="formGroupExampleInput2 " placeholder="Enter admin address" name='address' value={selectedUser.address} onChange={onChange}/>
        </div>
       <button type="submit" className="btn btn-outline-success mt-5" onClick={handleCklick}>edit </button>

    </form>

</div>
  )
}

export default Update
