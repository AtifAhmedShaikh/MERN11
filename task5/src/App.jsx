import React, { useState } from 'react'
import './App.css'
function App() {
  const [friendsList,setFriendsList]=useState([]);
  const [data,setData]=useState({name:"",age:0});
  const handleInputs=(e)=>{
    setData(e.target.value);
    const key=e.target.name;
    const value=e.target.value;
    setData({...data,[key]:value});
    console.log(data)
  }
  const handleSaveButton=()=>{
    if(!data.name||!data.age)return;
    setFriendsList([...friendsList,{...data,id:friendsList.length}]);
    setData({name:"",age:0})
  }
  const handleRemove=(id)=>{
    const filtered=friendsList.filter(item=>item.id!==id);
      setFriendsList([...filtered]);
  }
  const handleReset=()=>{
    setFriendsList([])
  }
  return (
    <React.Fragment>
      <h2>Friends List</h2>
    <div className="container">
      <div className="input-wrapper">
        <input type="text" value={data.name} onChange={handleInputs} name="name" className='name-field'/>
        <input type="number" name="age" value={data.age} onChange={handleInputs} className='age-field'/>
        <button className='clear-button' onClick={()=> setData({name:"",age:0})}>Clear</button>
        <button className='save-button' onClick={()=>handleSaveButton()}>Save</button>
      </div>
      <div className="list-wrapper">

      <div className="list">
          <p>Name</p>
          <span>Age</span>
          <p>Delete</p>
        </div>
        {friendsList?.map(item=>{
          return <div className="list" key={item.id}>
          <p>{item.name}</p>
          <span>{item.age}</span>
          <button onClick={()=>handleRemove(item.id)}>X</button>
        </div>;
        })}
      </div>
      <button className='clear-button' onClick={handleReset}>Reset List</button>
    </div>
    </React.Fragment>
  )
}

export default App
