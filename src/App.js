import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Posts from "./Posts";
import Dashboard from "./Dashboard";



function App() {
  return (
    
   <BrowserRouter>
   <Routes>

      <Route path = '/' element= {<Home/>}/>
      <Route path = '/dashboard' element = {<Dashboard/>}/>
      <Route path = '/posts' element = {<Posts/>}/>
      </Routes>
        
      </BrowserRouter>
      
   
  );
}

export default App;