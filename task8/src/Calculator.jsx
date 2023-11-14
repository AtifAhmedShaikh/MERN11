import React, { useState } from "react";
import Swal from 'sweetalert2'
const Calculator = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecond] = useState(0);
    const [result, setResult] = useState(0);
    const handleCalculate=()=>{
        switch(operation){
            case "+":
                setResult(a+b);
            break;
            case "-":
                setResult(a-b);
            break;
            case "*":
                setResult(a*b);
            break;
            case "/":
                setResult(a/b);
            break;
        }
    }
return <React.Fragment>
        <form action="" className="flex justify-center items-center flex-col gap-3" onSubmit={(e)=>{
            e.preventDefault();
            Swal.fire("Subbmit ")
}}>
            <input type="number" value={firstValue} onChange={(e) => setFirstValue(Number(e.target.value))} placeholder="Enter first " className="border border-gray-200 rounded-md px-2" />
            <input type="number" value={secondValue} onChange={(e) => setSecond(Number(e.target.value))} placeholder="Enter first " className="border border-gray-200 rounded-md px-2 ml-2" />
        <div className="flex justify-center gap-3 mt-3">
            <button type="submit" onClick={(e) => {
                setResult(firstValue + secondValue);
            }} className="bg-green-400 px-3 rounded-md text-gray-100">
                +
            </button>
            <button type="submit" className="bg-green-400 px-3 rounded-md text-gray-100" onClick={() => {
                setResult(firstValue - secondValue);
            }}>
                -
            </button>
            <button type="submit" className="bg-green-400 px-3 rounded-md text-gray-100" onClick={() => {
                setResult(firstValue * secondValue);
            }}>
                *
            </button>
            <button type="submit" className="bg-green-400 px-3 rounded-md text-gray-100" onClick={() => {
                setResult(firstValue / secondValue);
            }}>
                *
            </button>
            <div className="p-5">
                Result <span>{result}</span>
            </div>
        </div>
                </form>
    </React.Fragment>
}
export default Calculator;