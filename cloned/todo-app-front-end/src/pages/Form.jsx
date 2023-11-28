import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [todo,setTodo]=useState({
    text:"this is text of my!",
    status:true
  });
  const submitHandler=async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:5000/todo",todo);
    console.log(res.data)
  }
  return (
    <div>
        <form className="flex flex-col" onSubmit={submitHandler}>
            <input type="text" name="text" value={todo.text}  onChange={(e)=> setTodo({...todo,[e.target.name]:e.target.value})}/>
            <button type="button" onClick={()=>setTodo({...todo,status:!todo.status})}>{JSON.stringify(todo.status)}</button>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Form