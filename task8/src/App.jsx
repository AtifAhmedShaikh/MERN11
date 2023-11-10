import React, { useEffect, useState }  from 'react';
import './App.css'
import Profile from './Profile';
const Box=()=>{
  return  <div className='w-5 h-5 bg-green-500 rounded-3xl'></div>
}
function App() {
  const [count,setCount]=useState([]);
  
  return (
    <React.Fragment>
    <div className='w-18 h-16 flex gap-3 flex-wrap overflow-hidden'>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
    </div>
    <div className='overflow-hidden w-52 '>


    <div className='overflow-x-scroll w-52 gap-3 flex'>
    <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>

    </div>
    </div>
    <Profile/>
    </React.Fragment>
  )
}

export default App
