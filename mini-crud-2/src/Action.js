import axios from "axios";
import swal from "sweetalert";


export const fetchData = () => {
    return async(dispatch,getstate)=>{
        const response=await axios.get("https://62de95669c47ff309e7729bf.mockapi.io/users");
        console.log(response.data)
        dispatch({
            type:"FETCH_DATA",
            payload:response.data
        })
    }
}



export const addUser=(name,email,address)=>{
    return(dispatch)=>{
        axios.post('https://62de95669c47ff309e7729bf.mockapi.io/users',{name,email,address})
        .then(response=>{
            console.log(response.data);
            dispatch({
                type:'ADD_USER',
                payload:response.data
            })
            .catch(error=>{
                console.log(error)
            });
        })
    }
}

// export const updateUser=(data)=>{
//     return(dispatch)=>{
//         axios.put(`https://62de95669c47ff309e7729bf.mockapi.io/users/${id}`,{data})
//         .then(response=>{
//             console.log(response.data);
//             dispatch({
//                 type:'UPDATE_USER',
//                 payload:response.user
//             })
//             .catch(error=>{
//                 console.log(error)
//             });
//         })
//     }
// }

export const updateUser = async(data,id) => {
    const response=await axios.put(`https://62de95669c47ff309e7729bf.mockapi.io/users/${id}`,data)
    // window.location.href = "http://localhost:3001";
    swal({
            title: "Good job!",
            text: "User updated successfully!",
            icon: "success",
            button: "ok!",
          }).then(function() {
            window.location.href="/";
        });
    return (dispatch)=>{
        
           dispatch({
               type:'UPDATE_USER',
               payload:response.user
           })
  };
}

export const deleteUser = async(id) => {
    const response=await axios.delete(`https://62de95669c47ff309e7729bf.mockapi.io/users/${id}`)
    // window.location.href = "http://localhost:3001";
    swal({
        title: "Good job!",
        text: "User deleted successfully!",
        icon: "success",
        button: "ok!",
      }).then(function() {
        window.location.href="/";
    });
    return (dispatch)=>{
        
           dispatch({
               type:'DELETE_USER',
               payload:id
           })
  };
}

export const CheckUser= (email,password ,islogged)=>{

    return (dispatch)=>{
if(email== "tasnem@gmail.com" && password=="12345678"){
    islogged =true;
}else{
    islogged =false;
}
    dispatch({
        type:'CHECK_USER',
        payload:islogged
    })


}}



