import React, { useEffect, useState }  from 'react';
import './App.css'
import Boxes from "./Boxes"
import { Route, Routes } from 'react-router-dom';
import Calculator from "./Calculator"
function App() {
  const [count,setCount]=useState([]);
  const [isShow,setIsShow] =useState(true);
  return (
    <React.Fragment>
      <input type={isShow?"password":"text"} onChange={()=>} className='border border-gray-300'/>
      <button onClick={()=>setIsShow(!isShow)}>show {Array("hdsjakdhkjs".length).fill("*",0)} bdfgfdfdgz</button>
      {}
      <Routes>
        <Route path='/' element={<Boxes/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
