import React from 'react'
import Login from './component/Login'
import Logout from './component/Logout';
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Sidebar from './layout/Sidebar';

const App = () => {
  const user=useSelector(selectUser);
  return (
    <div>
  {/* {user ? <Logout/>:<Login/>} */}
  {/* <Sidebar/> */}
    </div>
  )
}

export default App
