import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isStart, setStart] = useState(false);
  useEffect(() => {
    if (isStart) {
    setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  }, [isStart]);
  return (
    <React.Fragment>
      <div className="flex gap-2">
        <div className="w-[50px] h-[50px] rounded-[5px] bg-gray-800 text-gray-100 flex items-center justify-center hover:scale-95">
          {seconds}
        </div>
        <div className="w-[50px] h-[50px] rounded-[5px] bg-gray-800 text-gray-100 flex items-center justify-center hover:scale-95">
    { minutes}
        </div>
        <div className="w-[50px] h-[50px] rounded-[5px] bg-gray-800 text-gray-100 flex items-center justify-center hover:scale-95">
          {hours}
        </div>
      </div>
      <button className="py-1 px-3 text-lg bg-green-700 rounded-md text-gray-100 mt-2 " onClick={()=>setStart(true)}>
        Start
      </button>
    </React.Fragment>
  );
}

export default App;
