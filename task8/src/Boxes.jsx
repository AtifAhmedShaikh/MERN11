import React from "react";

const Box=()=>{
    return  <div className='w-5 h-5 bg-green-500 rounded-3xl'></div>
  }
const Boxes=()=>{
    return <React.Fragment>
        Hllo
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
    </React.Fragment>
}

export default Boxes;