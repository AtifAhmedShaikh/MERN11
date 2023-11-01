import { useState } from 'react'
import './App.css'
function App() {
  const [boxes,setBoxes]=useState([]);
  const [count,setCount]=useState(0);
  const handleIncreament=()=>{
    setBoxes([...boxes,count])
    setCount((prev)=>prev+1);
  }
  return (
    <>
    <div className='container'>
    <div className="wrapper">
      {boxes.map(box=>{
        return <div>{box}</div>
      })}
    </div>
    <div>
     <p>{count}</p>
      <button onClick={handleIncreament}>Increament Boxes</button>
    </div>

    </div>
    </>
  )
}
export default App
