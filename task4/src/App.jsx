import { useState } from 'react'
import './App.css'
function App() {
  const [numbers,setNumbers]=useState([]);
  const [count,setCount]=useState(0);
  const handleIncrement=()=>{
    setNumbers([...numbers,count])
    setCount((prev)=>prev+1);
  }
  const handleRemove=(removeNumber)=>{
    const filtered=numbers.filter(number=>number!==removeNumber);
    setNumbers([...filtered]);
    setCount((prev)=>prev-1)
  }
  const handleReset=()=>{
    setNumbers([]);
    setCount(0)
  }
  return (
    <>
    <div className='container'>
    <div className="wrapper">
      {numbers.map(number=>{
        return <div onClick={()=>handleRemove(number)}>{number}</div>
      })}
    </div>
    <div>
     <p>{count}</p>
     <div className="button-wrapper">
      <button onClick={handleIncrement}>Increment Boxes</button>
      <button onClick={handleReset}>Reset</button>
     </div>
    </div>

    </div>
    </>
  )
}
export default App
