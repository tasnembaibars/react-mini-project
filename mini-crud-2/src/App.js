import Add from "./Admin/Add";
import { BrowserRouter,
  Routes,
  Route,} from 'react-router-dom'
import Home from "./Admin/Home";
import Update from "./Admin/Update";

function App() {
  return (
    <BrowserRouter>
    
     <Routes>
     <Route path="/" element={<Home/>} />

     <Route path="/edit/:id" element={<Update/>} />

      <Route path="/add" element={<Add/>} />
      
      </Routes>
     
      </BrowserRouter>
  );
}

export default App;
