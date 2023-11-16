import { useState } from "react"

const TaskComp = ({asignTo,task,time,handleRemove}) => {
   return <div className="flex justify-start items-start bg-gray-100 px-3 flex-col rounded-xl mb-5 py-2">
        <p>
            Task :
            {task}
        </p>
        <p>
            Asigned To : {asignTo}
        </p>
        <div className="flex justify-end items-end bg-gray-100">
            <button className="bg-blue-500 rounded-md text-gray-100 w-[20px] h-[20x] " onClick={()=>handleRemove(time)}>X</button>
        </div>
    </div>
}
const TasksManage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskData, setTaskData] = useState({ task: "", time: "", asignTo: "" });
    const handleNewTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { ...taskData, time: new Date().getTime() }]);
    }
    const handleInputs = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setTaskData({ ...taskData, [key]: value});
    }
    const handleRemove=(id)=>{
        const filtered=tasks.filter(item=>item.time!==id);
        setTasks([...filtered]);
    }
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center py-5">
                <div>
                    <form action="" onSubmit={handleNewTask}>
                    <input type="text" name="task" onChange={handleInputs} className="border" required/>
                    <select name="asignTo" onChange={handleInputs} required>
                        <option>
                            Tony
                        </option>
                        <option>
                            Jerry
                        </option>
                        <option>
                            Waqqas
                        </option>
                        <option>
                            Shaikh
                        </option>
                        <option>
                            Ahmed
                        </option>
                    </select>
                    <button className="bg-green-600 px-3 rounded-md" >Add Task</button>

                    </form>
                </div>
            </div>
                {tasks.map((task,index) => {
                    return <TaskComp key={index}  {...task} handleRemove={handleRemove}/>
                })}
        </>
    )
}

export default TasksManage